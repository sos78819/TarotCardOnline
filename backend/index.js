require('dotenv').config();
const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
const port = 8081;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tarot",

})

app.get("/member", (req, res) => {
    const sql = "SELECT *FROM member"
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error")
        } else {
            return res.json(data)
        }
    })
});
//註冊
app.post("/register", async (req, res) => {
    const sql = "INSERT INTO member(`nickName`, `account`, `password`) VALUES (?, ?, ?)"
    const { nickName, account, password } = req.body;
    db.query('SELECT * FROM member WHERE account = ?', [account], (err, results) => {
        if (err) {
            return res.json("Error")
        }

        if (results.length > 0) {
            return res.json("帳號已存在");
        }

        const values = [nickName, account, password];
        db.query(sql, values, (err, data) => {

            if (err) {
                return res.json("Error")
            } else {
                return res.json(data)
            }
        })
    })
});
//登入
app.post('/login', async (req, res) => {
    const { account, password } = req.body;
    const sql = "SELECT nickName,account, password,record FROM member WHERE account = ?"
    db.query(sql, [account], (err, data) => {
        if (err) {
            console.log(err)
            return res.json("Error")
        } else if (!data.length) {
            return res.json("incorrectAccount")
        } else if (data[0].password !== password) {
            return res.json("incorrectPassword")
        }
        else {
            const token = jwt.sign({ account: account }, process.env.JWT_SECRET, { expiresIn: '1h' });
            const nickName = data[0].nickName
            const record = data[0].record !== "" ? JSON.parse(data[0].record) : []
            console.log('record', record)
            return res.json({
                token: token,
                account: account,
                nickName: nickName,
                record: record
            })
        }
    })

});
//儲存
app.post('/saveCard', async (req, res) => {
    const { account, historyList, type } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }
    // 驗證 token
    const decoded = verifyToken(token);    

    if (!decoded || typeof decoded === 'object' && decoded.error) {
        if (decoded && decoded.error === 'Token expired') {
            return res.status(401).json({ message: 'Token has expired.' });
        }
        return res.status(401).json({ message: 'Invalid token.' });
    }

    // 如果 token 有效，比對 account
    const decodedAccount = decoded.account;
    if (decodedAccount !== account) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
    

    db.query('SELECT record FROM member WHERE account = ?', [account], (err, results) => {
        if (err) {
            return res.json("Error")
        }
        if (results.length) {
            const oldRecord = results[0].record !== "" ? JSON.parse(results[0].record) : []
            const newItem = {
                "historyList": historyList,
                "type": type
            }
            oldRecord.push(newItem)
            const newRecord = JSON.stringify(oldRecord)
            db.query('UPDATE member set record= ? WHERE account = ?', [newRecord, account], (err, results) => {
                if (err) {
                    return res.json("Error")
                } else {
                    return res.json(oldRecord)
                }

            })

        }
    })
})
//驗證token
function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // 檢查過期時間
        if (decoded.exp * 1000 <= Date.now()) {
            return { error: 'Token expired' };
        }
        return decoded;
    } catch (error) {
        return null;
    }
}



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
