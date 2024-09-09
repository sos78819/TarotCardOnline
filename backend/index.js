const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")
app.use(cors())
const port = 8081;
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"tarot",

})

app.get("/member", (req, res) => {
const sql ="SELECT *FROM member"
db.query(sql,(err,data)=>{
    if(err){
        return res.json(err)
    }else{
        return res.json(data)
    }

})
 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
