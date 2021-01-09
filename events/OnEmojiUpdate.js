const OnEvent = require("../OnEvent.js");
class OnEmojiUpdate extends OnEvent {
  constructor() {
    super("emojiUpdate");
  }

  async onEmojiUpdate(discordBot, oldEmoji, newEmoji) {
    console.log(`a custom guild emoji is updated`);
  }

  async execute(discordBot, ...args) {
    const oldEmoji = args[0];
    const newEmoji = args[1]
    await this.onEmojiUpdate(discordBot, oldEmoji, newEmoji);
  }
}

module.exports = new OnEmojiUpdate();