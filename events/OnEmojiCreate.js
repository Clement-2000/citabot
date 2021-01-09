const OnEvent = require("../OnEvent.js");
class OnEmojiCreate extends OnEvent {
  constructor() {
    super("emojiCreate");
  }

  async onEmojiCreate(discordBot, emoji) {
    console.log(`a custom emoji is created in a guild`);
  }

  async execute(discordBot, ...args) {
    const emoji = args[0];
    await this.onEmojiCreate(discordBot, emoji);
  }
}

module.exports = new OnEmojiCreate();
