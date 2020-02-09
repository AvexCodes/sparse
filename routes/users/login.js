const express = require("express");
//const { sendWebHookAPI } = require('./functions/discord.js') 
const router = express.Router();
const passport = require('passport')
const verification = require('passport-discord')
const session = require("express-session")

const OAuthClient = require('disco-oauth')
let oauthClient = new OAuthClient("668035183831941150", "aSuAiCQm5TTSLe1V5UyLOCwGQe-Ntwqg")

oauthClient.setScopes('identify', 'guilds')
oauthClient.setRedirect('https://cybersucks.glitch.me/login/auth')

router.get('/', (req, res) => {
    res.redirect(oauthClient.authCodeLink)
})

router.get('/auth', async (req, res) => {
  let code = req.query.code
  if (!code) {
    res.send("Auth code is undefined")
  } else {
    let userKey = await oauthClient.getAccess(code).catch(console.error)
    res.cookies.set('key', userKey)
    res.cookies.set('username', oauthClient.getUser(res.cookies.get('key')).username)
    res.cookies.set('id', oauthClient.getUser(res.cookies.get('key')).id)
   
    res.redirect('/profile')
    
  }
})

module.exports = router;