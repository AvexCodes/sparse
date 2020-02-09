const settings = require("./assets/db.json");
const { sendWebHookError, sendWebHookSuccess } = require("./discord.js");

let keys = {};

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: settings.ip,
  user: settings.username,
  password: settings.password,
  database: settings.db
});



keys.validateKey = async function(key) {
  await connection.connect(err => {
    if (err) {
      sendWebHookError(err);
    }

    //sendWebHookSuccess("Test")
  });
  
  
  let bool = false;
  
  let data = await connection.query(
    `SELECT * FROM \`api\` WHERE apiKey = "${key.toString()}"`
  );

  if (data.toString().includes(key)) {
    bool = true;
  } else {
    bool = false;
  }

  return bool;
};

module.exports = keys;
