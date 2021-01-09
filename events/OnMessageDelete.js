const OnEvent = require("../OnEvent.js");
class OnMessageDelete extends OnEvent {
  constructor() {
    super("messageDelete");
  }
  
  async onMessageDelete(discordBot, message) {
    console.log(`a message is deleted`);
  }
  
  async execute(discordBot, ...args) {
    const message = args[0];
    await this.onMessageDelete(discordBot, message);
  }
}

module.exports = new OnMessageDelete();

