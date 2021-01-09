const OnEvent = require("../OnEvent.js");
class onChannelDelete extends OnEvent {
  constructor() {
    super("channelDelete");
  }
  
  async onChannelDelete(discordBot, channel) {
    console.log(`channelDelete: ${channel}`);
  }
  
  async execute(discordBot, ...args) {
    const channel = args[0];
    await this.onChannelDelete(discordBot, channel);
  }
}

module.exports = new onChannelDelete();
