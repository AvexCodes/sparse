const express = require("express");
//const { sendWebHookAPI } = require('./functions/discord.js') 
const router = express.Router();

router.get('/', async (req, res) => {
    let key = req.cookies.get('key')
  if (key) {
    let user = await req.cookies.get('username')
    let id = await req.cookies.get('id')
    
    res.render('profile.ejs', {
      name: user,
      id: id
    })
  }
})

module.exports = router;