const OnEvent = require("../OnEvent.js");
class OnWarn  extends OnEvent {
  constructor() {
    super("warn");
  }

  async onWarn(discordBot, info) {
    console.log(`warn: ${info}`);
  }

  async execute(discordBot, ...args) {
    const config = discordBot.config;

    const info = args[0];
    
    await this.onWarn(discordBot, info);
  }
}

module.exports = new OnWarn();