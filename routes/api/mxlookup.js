const express = require("express");

const { sendWebHookAPI, sendWebHookError } = require('./functions/discord.js') 

const router = express.Router();
var dns = require('dns')

router.get('/', (req, res) => {
  if (!req.query.url) {res.send({data:"No URL provided!"})}   
  const { validate } = require('../../test.js')
if (!validate(req.query.key || "null")) {res.send({data:"Invalid key!"})}
  dns.resolveMx(req.query.url, (err, adress, family) => {
      
    // XD
    
    if (err) {
      res.send({data:`Invalid URL provided!. Example : example.com`})
      sendWebHookError(err)
      return;
    }
      sendWebHookAPI("mxlookup")
      res.send({MX:adress});
  });
})
module.exports = router;