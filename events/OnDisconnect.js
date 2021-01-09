const OnEvent = require("../OnEvent.js");
class OnDisconnect extends OnEvent {
  constructor() {
    super("disconnect");
  }

  async onDisconnect(discordBot, event) {
    console.log(
      `The WebSocket has closed and will no longer attempt to reconnect`
    );
  }
    
  async execute(discordBot, ...args) {
    const event = args[0];
    await this.onDisconnect(discordBot, event);
  }
}

module.exports = new OnDisconnect();