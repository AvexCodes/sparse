const test = {}

const mysql = require('mysql')

const { sendWebHookError } = require('./routes/api/functions/discord.js')

var settings = require('./routes/api/functions/assets/db.json')

var connection = mysql.createConnection({
  host: settings.ip,
  user: settings.username,
  password: settings.password,
  database: settings.db
});
 
test.validateKey = async function(key) {
  try {
    let data = await connection.query(`SELECT * FROM api WHERE apiKey = '${key}'`)
    data = data.toString()
    if (!data.includes(key)) Boolean(false)
    return Boolean(true)
  } catch (error) {
    sendWebHookError(error)
  }
}

module.exports = test;