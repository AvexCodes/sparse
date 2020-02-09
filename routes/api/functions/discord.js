let DiscordActions = {}

var discordURL = "https://discordapp.com/api/webhooks/672336818493980693/uq_beFd_2PJ82cTh-iQqMKFJ1jPPxAc-UyBLbN6OGFamtyndGMikRCkgAuPQA_B483KO"
var webhookname = "Test Webhook"

const webhook = require("webhook-discord")
 
const Hook = new webhook.Webhook(discordURL)

DiscordActions.sendWebHookAPI = function(apiName) {
  Hook.info(webhookname, `Someone has used the ${apiName} API!`)
}

DiscordActions.sendWebHookError = function(err) {
  Hook.err(webhookname, `New Error Encounted!\n\n${err}`)
}

DiscordActions.sendWebHookWarn = function(ip) {
  Hook.warn(webhookname, `${ip}, has made many requests recently!`)
}

DiscordActions.sendWebHookSuccess = function(text) {
  Hook.success(webhookname, `${text}`)
}
module.exports = DiscordActions;