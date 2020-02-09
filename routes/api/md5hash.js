const express = require("express");

const { sendWebHookAPI, sendWebHookError } = require("./functions/discord.js");

const router = express.Router();

var md5 = require('md5');

router.get("/", (req, res) => {
  
//  if (!req.query.loc) {res.send({ data: "No url provided!" });}
  
  var Hashed = md5(req.query.text);
  
  res.send({Hashed}); // Automatically converts to json >_>
  
});
module.exports = router;
