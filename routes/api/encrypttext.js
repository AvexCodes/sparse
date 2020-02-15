const express = require("express");

const { sendWebHookAPI, sendWebHookError } = require("./functions/discord.js");

const router = express.Router();

const Crypto = require("secret-maker").default


router.get("/", (req, res) => {
  const { validate } = require('../../test.js')
if (!validate(req.query.key || "null")) {res.send({data:"Invalid key!"})}
  
  const privateKey = 'SparseAPIWillRuletheworld'
  const crypto = new Crypto(privateKey)
  
  var Text2Encrypt = req.query.text;
  var Value = req.query.value;
  
  if (Value.startsWith('e')) {
    
    var encrypted = crypto.encrypt(Text2Encrypt);
    res.send({data:{encrypted}})
    
  } else if (Value.startsWith('d')) {
    
    var decrypted = crypto.decrypt(Text2Encrypt);
    res.send({data:{decrypted}})
    
  } else {
    res.send(`There was a problem with your value! example : value=decrypt or value=encrypt`);
  }
  
  
});
module.exports = router;
