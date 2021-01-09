const OnEvent = require("../OnEvent.js");
class OnMessageReactionRemove  extends OnEvent{
  constructor() {
    super("messageReactionRemove");
  }

  async onMessageReactionRemove(discordBot, messageReaction, user) {
    console.log(`a reaction is removed from a message`);
  }

  async execute(discordBot, ...args) {
    const messageReaction = args[0];
    const user = args[1];
    await this.onMessageReactionRemove(discordBot, messageReaction, user);
  }

}

module.exports = new OnMessageReactionRemove();