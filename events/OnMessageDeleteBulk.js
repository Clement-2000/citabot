const OnEvent = require("../OnEvent.js");
class mOnMessageDeleteBulk extends OnEvent{
  constructor() {
    super("messageDeleteBulk");
  }
  
  async onMessageDeleteBulk(discordBot, messages) {
    console.log(`messages has been massively deleted`);
  }

  async execute(discordBot, ...args) {
    const messages = args[0];
    await this.onMessageDeleteBulk(discordBot, messages);
  }

}

module.exports = new mOnMessageDeleteBulk();

