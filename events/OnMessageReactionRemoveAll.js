const OnEvent = require("../OnEvent.js");
class OnMessageReactionRemoveAll extends OnEvent {
  constructor() {
    super("messageReactionRemoveAll");
  }

  async onMessageReactionRemoveAll(discordBot, message) {
    console.error(`all reactions are removed from a message`);
  }

  async execute(discordBot, ...args) {
    const message = args[0];
    await this.onMessageReactionRemoveAll(discordBot, message);
  }
}

module.exports = new OnMessageReactionRemoveAll();