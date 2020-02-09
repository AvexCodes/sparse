const express = require("express");

const { sendWebHookAPI, sendWebHookError, sendWebHookWarn } = require("./functions/discord.js")
const { validateKey } = require('./functions/keys.js')
const router = express.Router();


router.get('/', (req, res) => {
  //sendWebHookAPI("test")
  //sendWebHookError("test error")
  //sendWebHookWarn("127.0.0.1")
  //res.send({data:"Success!"})
  
  if (validateKey(req.query.key)) {
      res.send({data:"valid key!"})
  } else {
    res.send({data:"invalid key!"})
  }
  
})

module.exports = router;