const express = require("express");

const { sendWebHookAPI, sendWebHookError } = require('./functions/discord.js') 

const router = express.Router();
var dns = require('dns')

router.get('/', (req, res) => {
  if (!req.query.url) {res.send({data:"No URL provided!"})}   
  dns.resolveNs(req.query.url, (err, adress, family) => {
      
    // XD
    
    if (err) {
      res.send({data:`Invalid URL provided!. Example : example.com`})
      sendWebHookError(err)
      return;
    }
      sendWebHookAPI("nslookup")
      res.send({NS:adress});
  });
})
module.exports = router;