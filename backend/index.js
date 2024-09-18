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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
