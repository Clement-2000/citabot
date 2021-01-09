const OnEvent = require("../OnEvent.js");
class OnResume  extends OnEvent{
  constructor() {
    super("resume");
  }

  async onResume(discordBot, replayed) {
    console.log(`whenever a WebSocket resumes, ${replayed} replays`);
  }

  async execute(discordBot, ...args) {
    const replayed = args[0];
    await this.onResume(discordBot, replayed);
  }
}

module.exports = new OnResume();