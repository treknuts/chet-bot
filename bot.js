var logger = require("winston");

const Discord = require("discord.js");
const bot = new Discord.Client();
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

bot.once("ready", () => {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", (message) => {
  tools.forEach((tool) => {
    if (message.content === `${prefix}${tool}`) {
      message.channel.send("Check.");
    }
  });
});

bot.login(token);
// bot.login(process.env.BOT_TOKEN);
