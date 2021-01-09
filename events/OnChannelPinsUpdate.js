const OnEvent = require("../OnEvent.js");
class OnChannelPinsUpdate extends OnEvent {
  constructor() {
    super("channelPinsUpdate");
  }

  async onChannelPinsUpdate(discordBot, channel, time) {
    console.log(`channelPinsUpdate: ${channel}:${time}`);
  }
  
  async execute(discordBot, ...args) {
    const channel = args[0];
    const time = args[1];
    await this.onReconnecting(discordBot, channel, time);
  }
}

module.exports = new OnChannelPinsUpdate();

