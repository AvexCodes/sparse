const express = require("express");

const router = express.Router();

const { sendWebHookAPI } = require('./functions/discord.js') 

const { validate } = require('../../test.js')

const songs = ["Sucidal - YNW Melly",
    "Say So - Doja Cat",
    "The Box - Roddy Ricch",
    "SUGAR - BROCKHAMPTON",
    "No Idea - Don Toliver",
    "Ok Boomer (Ft. Jed Will) - Peter Kuli",
    "Lottery (Renegade) - K CAMP",
    "Yummy - Justin Bieber",
    "STUPID (ft. Yung Baby Tate)",
    "Vibez - DaBaby",
    "Birthday Suit - Cosmo Sheldrake",
    "Pump It Up - Endor",
    "Get up - Ciara",
    "The Git Up (Ft. Ciara) - Blanco Brown",
    "223's (Ft. 9lokknine) - YNW Melly",
    "Round of Applause - K'ron",
    "Goodmorningtokyo! - TOKYO'S REVENGE",
    "ROXANNE - Arizona Zervas",
    "Falling - Trevor Daniel",
    "Dance Monkey - Tones and I",
    "Ride It - Regard",
    "Don't Start Now - Dua Lipa",
    "Love Songs (Bonus) - Kaash Paige",
    "Mine - Bazzi",
    "Be Gone Thot! - LIL MAYO",
    "Lalala - Y2k & bbno$",
    "Rumors - Jake Miller",
    "Lucid Dreams - Juice WRLD",
    "Monster - dodie",
    "Someone You Loved - Lewis Capaldi",
    "Take Your Man - Mahogany Lox",
    "Panini - Lil Nas X",
    "Runaway (Ft. Phillyk.) - Last 60\\\" & Five",
    "Fake ID - Rition & Kah-lo",
    "everything i wanted - Billie Eilish",
    "10,000 Hours - Dan",
    "Orinoco Flow (2009 Remaster) - Enya",
    "Futsal Shuffle 2020 - Lil Uzi Vert",
    "Sunday Best - Surfaces",
    "Bipolar (Ft. Luna Vexa) - ThatBehavior & BEAUZ",
    "Ayy Macarena - Tyga",
    "Back Up (Ft. Big Sean)",
    "Dissolve - Absofacto",
    "Ms - alt-j",
    "Working Bitch - Ashnikko",
    "Bandit - Juice WRLD & YoungBoy Never Broke Again",
    "What You're Thinkin\\\' - Hella & Conan Mac",
    "The Running - John The Blind",
    "Walk - Comethazine",
    "Only Want You (Ft. 6LACK) - Rita",
    "Soap - Melanie Martinez",
    "Candy - Doja Cat",
    "Kraazy - Likybo",
    "Boys - Lizzo",
    "I Heart You - Baby Ariel",
    "Mind Is A Prison - Alec Benjamin",
    "Yellow Hearts - Ant Saunders",
    "Cash S**t (Ft. DaBaby) - Megan Thee Stallion",
    "I Don\\\'t Mind (Ft. Juicy J) - Usher",
    "FML - Arizona Zervas",
    "Swing (Ft. Soulja Boy Tell \\\'Em) - Savage",
    "No Money - Galantis",
    "Cuz I Love You - Lizzo",
    "Hey Julie! (Ft. Lil Yachty) - KYLE",
    "It\\\'s You - Ali Gatie",
    "Perfect - Ed Sheeran",
    "Nevermind - Dennis Lloyd",
    "Frontline - Pa Salieu",
    "Bad Vibe (Ft. A Boogie wit da Hoodie & 2 Chainz) - Quando Rondo"]

router.get('/', (req, res) => {
  if (!validate(req.query.key || "null")) {res.send({data:"Invalid key!"})}
  res.send({data:songs[Math.floor(Math.random()*songs.length)]})
  sendWebHookAPI("song")
})

module.exports = router;