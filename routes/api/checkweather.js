const express = require("express");

const { sendWebHookAPI, sendWebHookError } = require("./functions/discord.js");

const router = express.Router();

var weather = require('weather-js2');

router.get("/", (req, res) => {
  
//  if (!req.query.loc) {res.send({ data: "No url provided!" });}
  
  weather.find({search: req.query.loc, degreeType: 'F', resCount: 1}, function(err, result) {
  
    if(err) {
      res.send(`There was a problem with your location!`);
    }
    
    res.send(JSON.stringify(result, null, 2));
    
  })
  
});
module.exports = router;
