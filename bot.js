var Discord = require("discord.io");
var logger = require("winston");

const { prefix, token } = require("./auth.json");

const tools = [
  "knives",
  "rope",
  "dagger",
  "chains",
  "locks",
  "laserbeams",
  "acid",
  "bodybag",
  "shiv",
  "pipe",
  "hammer",
  "axe",
  "subject",
  "location",
  "desire",
  "vengeance",
  "swords",
  "saws",
  "clubs",
  "claws",
  "hatred",
  "anger",
  "mermaid",
  "murder",
];

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
  colorize: true,
});
logger.level = "debug";

var bot = new Discord.Client({
  token: token,
  autorun: true,
});
bot.on("ready", function (evt) {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function (user, userID, channelID, message, evt) {
  if (message.substring(0, 1) == `${prefix}`) {
    var args = message.substring(1).split(" ");
    var cmd = args[0];

    if (tools.includes(cmd)) {
      bot.sendMessage({
        to: channelID,
        message: "Check.",
      });
    } // else if (cmd == "commands") {
    //     bot.sendMessage({
    //         to: channelID,
    //         message: ""
    //     })
    // }
    // Just add any case commands if you want to..
  }
});
