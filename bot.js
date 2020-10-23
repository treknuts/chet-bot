var logger = require("winston");

const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "/";
const MIN_INTERVAL = 28 * 60 * 1000;

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

bot.once("ready", () => {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
  setInterval(() => {
    var general = bot.channels.get("768883994493976577");
    general.send("What's up bois??");
  }, MIN_INTERVAL);
});
bot.on("message", (message) => {
  if (message.content === `${prefix}shit`) {
    message.channel.send("Piss!");
  }

  tools.forEach((tool) => {
    if (message.content === `${prefix}${tool}`) {
      message.channel.send("Check.");
    }
  });
});

bot.login(process.env.BOT_TOKEN);
