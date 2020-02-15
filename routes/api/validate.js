const express = require("express");

const { sendWebHookError} = require("./functions/discord.js")
const { validateKey } = require('./functions/keys.js')

const settings = require('./functions/assets/db.json')

var mysql = require('mysql');
const router = express.Router();

const { validate } = require('../../test.js')

router.get('/', (req, res) => {
  
  if (validate(req.query.key)) {
    res.send({data:true})
  } else {
    res.send({data:false})
  }

})

module.exports = router;