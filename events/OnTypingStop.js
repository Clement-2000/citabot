const OnEvent = require("../OnEvent.js");
class OnTypingStop  extends OnEvent{
  constructor() {
    super("typingStop");
  }

  async onTypingStop(discordBot, channel, user) {
    console.log(`<${user.tag}> has stopped typing`);
  }

  async execute(discordBot, ...args) {
    const channel = args[0];
    const user = args[1];
    await this.onTypingStop(discordBot, channel, user);
  }
}

module.exports = new OnTypingStop();