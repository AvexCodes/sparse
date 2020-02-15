const express = require("express");

const router = express.Router();
var dns = require('dns')

const { sendWebHookAPI, sendWebHookError } = require('./functions/discord.js') 

router.get('/', (req, res) => {
  const { validate } = require('../../test.js')
if (!validate(req.query.key || "null")) {res.send({data:"Invalid key!"})}
  if (!req.query.url) {res.send({data:"No URL provided!"})}   
  dns.lookup(req.query.url, (err, adress, family) => {
      
    
    if (err) {
      res.send({data:`Invalid URL provided!. Example : example.com`})
      sendWebHookError(err)
      return;
    }
      sendWebHookAPI("host2ip")
      res.send({data:adress});
  });
})
module.exports = router;