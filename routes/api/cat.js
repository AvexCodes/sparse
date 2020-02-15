const express = require("express");
const { sendWebHookAPI } = require('./functions/discord.js') 
const router = express.Router();
const key = require('./functions/keys.js')

function getRandomInt(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}


let url = `https://cyber-request.net/api/images/cats/${getRandomInt(0, 195)}.png`;

router.get('/', (req, res) => {
    const { validate } = require('../../test.js')
if (!validate(req.query.key || "null")) {res.send({data:"Invalid key!"})}
    if (key.validateKey(key)) {
      
    res.send({data:url})
    //sendWebHookAPI("cat")
    //re
    } else {
      res.send({data:'Invalid Key!'})
    }
})

module.exports = router;