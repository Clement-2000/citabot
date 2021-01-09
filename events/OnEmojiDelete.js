const OnEvent = require("../OnEvent.js");
class OnEmojiDelete extends OnEvent {
  constructor() {
    super("emojiDelete");
  }

  async onEmojiDelete(discordBot, emoji) {
    console.log(`a custom guild emoji is deleted`);
  }
  async execute(discordBot, ...args) {
    const emoji = args[0];
    await this.onEmojiDelete(discordBot, emoji);
  }
}

module.exports = new OnEmojiDelete();