const modes = require('../modes.json')
let mode = modes.canary ? "Canary" : "(CA) Main"

const fetch = require('node-fetch')

const { sendWebHookError, sendWebHookWarn, sendWebHookSuccess } = require('.././routes/api/functions/discord.js')

async function startHealthChecker() {
  if (modes.canary) {
    fetch('https://SparseCanary.avexcodes.repl.co/ping').then(res => res.json()).then(body => {
      if (!body) return sendWebHookError(`[${mode}] NO RESPONSE RECIEVED!`)
      sendWebHookSuccess(`[${mode}] **Health Checker** ❤️\n${mode}: Online!`)
    }).catch(x => {
      sendWebHookError(`[${mode}] Encountered and error! \`\`\yaml\n${e}\`\`\``)
    })
  } else {
    fetch('https://sparse.pw/ping').then(res => res.json()).then(body => {
      if (!body) return sendWebHookError(`[${mode}] NO RESPONSE RECIEVED!`)
      sendWebHookSuccess(`${body.data} recieved ping from webserver!`)
      })
    }
}

startHealthChecker()

// Every 10 mins
setInterval(async function() {
  await startHealthChecker();
}, 600000)

const checker = console.log(`Checker service is on!`)
module.exports = checker;