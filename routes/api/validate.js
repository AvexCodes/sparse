const express = require("express");

const { sendWebHookError} = require("./functions/discord.js")
const { validateKey } = require('./functions/keys.js')

const settings = require('./functions/assets/db.json')

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: settings.ip,
  user: settings.username,
  password: settings.password,
  database: settings.db
});
 

const router = express.Router();

connection.connect();

router.get('/', (req, res) => {
  
 
  connection.query(`SELECT * FROM api WHERE apiKey = '${req.query.key || "nothing"}'`, function (error, results, fields) {
    if (error) sendWebHookError(error);
    if (results.length === 0) {res.send({data:"Invalid!"})}
    res.send({data:true})
  
  });
 
  //connection.end();
})

module.exports = router;