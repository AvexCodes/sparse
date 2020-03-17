const test = {}
const modes = require('./modes.json')
let mode = modes.canary ? "Canary" : "(CA) Main"
const mysql = require('mysql')

const { sendWebHookError } = require('./routes/api/functions/discord.js')

var settings = require('./routes/api/functions/assets/db.json')

var connection = mysql.createConnection({
  host: settings.ip,
  user: settings.username,
  password: settings.password,
  database: settings.db
});

var keys = []

const {  sendWebHookWarn, sendWebHookSuccess} = require('./routes/api/functions/discord.js')

test.grabKeys = async function(key) {
    sendWebHookWarn("[" + mode + "] Starting key grabber service!")
    await connection.query(`SELECT * FROM api`, (err, rows) => {
      for (let i = 0; i < rows.length; i++) {
        keys.push(rows[i].apiKey)
        console.log("Key: " +  rows[i].apiKey + " has been addded to the array!")
        if (i == rows.length) {
          sendWebHookSuccess("[" + mode + "] Key collection finished!")
          console.log(keys)
        }
      }
    })

    setTimeout(() => {
      connection.end()
      sendWebHookSuccess(`[${mode}] Key service finished and ended connection to db!`)
      }, 10000)
}

test.insertKey = async function(key) {
    await connection.query(`INSERT INTO api (id, apiKey) VALUES (null, ?)`, [key], (err, results) => {
      if (err) {
        sendWebHookError(err)
      }
      sendWebHookSuccess(`[${mode}] Inserted key: ${key} into the db!`)
      keys.push(key)
    })
    setTimeout(() => {
      connection.end()
      sendWebHookSuccess(`[${mode}] Key insertion service finished and ended connection to db!`)
      }, 5000)
}

test.validate = function(checkKey) {
  if (keys.includes(checkKey)) {
    return true
  } else {
    return false
  }
}

module.exports = test;