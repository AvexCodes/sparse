const express = require("express");

const router = express.Router();
const { sendWebHookAPI } = require('./functions/discord.js') 
function getRandomInt(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}


let url = `https://cyber-request.net/api/images/dogs/${getRandomInt(0, 3928)}.png`;

router.get('/', (req, res) => {
  res.send({data:url})
  sendWebHookAPI("dog")
})

module.exports = router;