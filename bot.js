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
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  console.log(args);
  const command = args[0];
  if (command === "game") {
    message.channel.send(`<@${"775171418459602944"}> lets play some games!`);
  } else if (command === "@thegoddamnbar") {
    message.channel.send(`<@${"229462482337529856"}> is at the bar. :beer:`);
  } else if (command === "unpoopmypants") {
    message.channel.send(
      "Here buddy let me clean that up for ya. :roll_of_paper: :toilet: Now go take a :bath:"
    );
  } else if (command === "roast") {
    if (!message.mentions.users.size) {
      return message.reply("you need to tag someone to roast them, silly.");
    } else if (message.mentions.users.first().id == 233363034129563650) {
      return message.reply(`hold up. <@${"233363034129563650"}> is my boy.`);
    } else {
      let mention = message.mentions.users.first().id;
      message.channel.send(`Hey <@${mention}>, remember your first blowjob?`);
    }
  } else if (command == "finish") {
    if (!message.mentions.users.size) {
      return message.reply(
        "you need to tell me who to finish. :person_shrugging:"
      );
    } else if (message.mentions.users.first().id == 233363034129563650) {
      return message.reply("Please stop. :(");
    } else {
      let mention = message.mentions.users.first().id;
      message.channel.send(`<@${mention}> How'd it taste?`);
    }
  } else {
    tools.forEach((tool) => {
      if (message.content === `${prefix}${tool}`) {
        message.channel.send("Check. :mermaid:");
      }
    });
  }
});

bot.login(process.env.BOT_TOKEN);
