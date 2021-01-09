const OnEvent = require("../OnEvent.js");
class OnReconnecting extends OnEvent {
  constructor() {
    super("reconnecting");
  }
  
  async onReconnecting(discordBot) {
    console.log(`client tries to reconnect to the WebSocket`);
  }

  async execute(discordBot, ...args) {
    await this.onReconnecting(discordBot);
  }
}

module.exports = new OnReconnecting();

