const express = require("express");

const { sendWebHookAPI, sendWebHookError } = require("./functions/discord.js");

const router = express.Router();

var geoip = require("geoip-lite");

router.get("/", (req, res) => {
  
  if (!req.query.ip) {res.send({ data: "No ip provided!" });}
  
  var geo = geoip.lookup(req.query.ip);
  
  if (!geo) {res.send({data:"Invalid ip address!"})}
  sendWebHookAPI("geo ip")
  res.send({data:{ip:req.query.ip, country:geo.country, region:geo.region, timezone:geo.timezone, city:geo.city, metro:geo.metro, area: geo.area}});
  
});
module.exports = router;
