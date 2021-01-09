const OnEvent = require("../OnEvent.js");
class OnMessage extends OnEvent{
  constructor() {
    super("message");
  }

  async onMessage(discordBot, message) {

    console.log(`new message of @${message.author.tag} in #${message.channel.name}: "${message.content}"`);

    const normalizedMessage = discordBot.functions.normalize(message.content);

    if (message.author == discordBot.client.user) {
      return;
    }
    
    if (!normalizedMessage.startsWith(discordBot.config.PREFIX)) {
      console.log("Message is not a command");

      if (normalizedMessage.includes("citaro")) {
        message.react(message.guild.emojis.cache.get('764617629557325884'));
        message.react("😍");
      }

      if (normalizedMessage.includes("urbanway") || normalizedMessage.includes("iveco")) {
        message.react("🤮");
      }

      if (normalizedMessage.includes("nedelec") || normalizedMessage.includes("yohann")) {
        message.react("😬");
        message.channel.send("Oh non, pas Nédélec ! 😭")
      }

      return;
    }

    const args = message.content
      .slice(discordBot.config.PREFIX.length)
      .split(/ +/);
    
    const commandName = discordBot.functions.normalize(args.shift());

    const command =
      discordBot.client.commands.get(commandName) ||
      discordBot.client.commands.find(
        commandFound =>
          commandFound.aliases &&
          commandFound.aliases.includes(commandName)
      );

    if (command) {
      command.execute(discordBot, message, args);
    }
  }

  async execute(discordBot, ...args) {
    const message = args[0];
    await this.onMessage(discordBot, message);
  }
}

module.exports = new OnMessage();
