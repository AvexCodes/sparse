const express = require("express");

const { sendWebHookAPI, sendWebHookError } = require('./functions/discord.js') 

const router = express.Router();

router.get('/', (req, res) => {
  let now = Date.now()
  res.send({data:Date.now() - now * 100 + "ms"})
})

module.exports = router;