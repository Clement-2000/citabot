const OnEvent = require("../OnEvent.js");
class OnError extends OnEvent {
  constructor() {
    super("error");
  }

  async onError(discordBot, error) {
    console.error(
      `client's WebSocket encountered a connection error: ${error}`
    );
  }

  async execute(discordBot, ...args) {
    const error = args[0];
    await this.onError(discordBot, error);
  }
}

module.exports = new OnError();