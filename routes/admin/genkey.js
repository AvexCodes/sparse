const express = require("express");

const router = express.Router();

var settings = require('../api/functions/assets/db.json')

const { sendWebHookAPI, sendWebHookError } = require('../api/functions/discord.js') 
const mysql = require('mysql')
var connection = mysql.createConnection({
  host: settings.ip,
  user: settings.username,
  password: settings.password,
  database: settings.db
});

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


router.get('/', (req, res) => {
  if (req.query.pass != "cybebrxa") {return res.send('Cannot GET /admin/genkey')}
  var keyGened = makeid(12)
  connection.query(`INSERT INTO api (id, apiKey) VALUES (null, '${keyGened}')`, (error, results, fields) => {
    if (error) return sendWebHookError(error)
    res.send({data:`${keyGened}`})
    sendWebHookAPI("keygen")
  })
  
})

module.exports = router;