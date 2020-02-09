const express = require("express");

const { sendWebHookAPI, sendWebHookError } = require('./functions/discord.js') 

const router = express.Router();
let defualt = 6;
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-.{}[]\|,/?`~';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


router.get('/', (req, res) => {
  if (req.query.length < 6) {res.send({data:makeid(defualt)})}
  if (!parseInt(req.query.length)) {res.send({data:makeid(defualt)})}
  try {
    sendWebHookAPI("password")
    res.send({data:makeid(req.query.length || defualt)})  
  } catch (err) {
    sendWebHookError(err)
  }
})

module.exports = router;