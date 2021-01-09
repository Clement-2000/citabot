const OnEvent = require("../OnEvent.js");
class OnTypingStart  extends OnEvent{
  constructor() {
    super("typingStart");
  }

  async onTypingStart(discordBot, channel, user) {
    console.log(`<${user.tag}> has started typing in channel ${channel.name}`);
  }

  async execute(discordBot, ...args) {
    const channel = args[0];
    const user = args[1];
    await this.onTypingStart(discordBot, channel, user);
  }
}

module.exports = new OnTypingStart();