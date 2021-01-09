const OnEvent = require("../OnEvent.js");
class OnDebug extends OnEvent{
  constructor() {
    super("debug");
  }

  async onDebug(discordBot, info) {
    //console.log(`debug: ${info}`);
  }
  
  async execute(discordBot, ...args) {
    const info = args[0];
    await this.onDebug(discordBot, info);
  }  
}

module.exports = new OnDebug();

