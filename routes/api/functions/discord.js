let DiscordActions = {}

var discordURL = "https://discordapp.com/api/webhooks/678089764108238898/45wlHCWsHMxyOkXKv8DYS_943cXPl-u97bSy6JqcOBhXRje1n3fhQJJ8ElYXZ29mLG5b"
var webhookname = "Sparse Logger"

const webhook = require("webhook-discord")
 
const Hook = new webhook.Webhook(discordURL)

DiscordActions.sendWebHookAPI = function(apiName) {
  Hook.info(webhookname, `Someone has used the ${apiName} API!`)
}

DiscordActions.sendWebHookError = function(err) {
  Hook.err(webhookname, `New Error Encounted!\n\n${err}`)
}

DiscordActions.sendWebHookWarn = function(text) {
  Hook.warn(webhookname, `${text}`)
}

DiscordActions.sendWebHookSuccess = function(text) {
  Hook.success(webhookname, `${text}`)
}
module.exports = DiscordActions;