var logger = require("winston");

const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "/";

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
  const args = message.content.splice(prefix.length).trim().split(/ +/);
  console.log(args);
  const command = args[0];
  if (command === `shit`) {
    message.channel.send("Piss!");
  } else if (command === `@thegoddamnbar`) {
    message.channel.send("I'm at the bar motherfucker");
  } else if (command === `unshitmypants`) {
    message.channel.send(
      "Here buddy let me clean that up for ya. :roll_of_paper: :toilet: Now go take a :bath:"
    );
  } else if (command === `roast`) {
    let mention = message.mentions.users.first();
    message.channel.send(
      `Hey ${mention.username}, remember your first blowjob?`
    );
  } else {
    tools.forEach((tool) => {
      if (message.content === `${prefix}${tool}`) {
        message.channel.send("Check. :mermaid:");
      }
    });
  }
});

bot.login(process.env.BOT_TOKEN);
