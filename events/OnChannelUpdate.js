const OnEvent = require("../OnEvent.js");
class OnChannelUpdate extends OnEvent {
  constructor() {
    super("channelUpdate");
  }
  
  async onChannelUpdate(discordBot, oldChannel, newChannel) {
    if (oldChannel && newChannel) {
      console.log(
        `channelUpdate -> a channel is updated from ${oldChannel.name} to ${newChannel.name}`
      );
    } else if (oldChannel) {
      console.log(
        `channelUpdate -> a channel is updated from ${oldChannel.name}`
      );
    } else if (newChannel) {
      console.log(
        `channelUpdate -> a channel is updated to ${newChannel.name}`
      );
    } else {
      console.log(
        `channelUpdate -> a channel is updated - e.g. name change, topic change`
      );
    }
  }

  async execute(discordBot, ...args) {
    const oldChannel = args[0];
    const newChannel = args[1];
    await this.onChannelUpdate(discordBot, oldChannel, newChannel);
  }
}

module.exports = new OnChannelUpdate();

