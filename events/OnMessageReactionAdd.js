const OnEvent = require("../OnEvent.js");
class OnMessageReactionAdd extends OnEvent{
  constructor() {
    super("messageReactionAdd");
  }
  
  async onMessageReactionAdd(discordBot, messageReaction, user) {
    console.log(`a reaction is added to a message`);
  }

  async execute(discordBot, ...args) {
    const messageReaction = args[0]; 
    const user = args[1];
    await this.onMessageReactionAdd(discordBot, messageReaction, user);
  }
}

module.exports = new OnMessageReactionAdd();

