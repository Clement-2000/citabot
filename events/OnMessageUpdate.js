const OnEvent = require("../OnEvent.js");
class OnMessageUpdate extends OnEvent {
  constructor() {
    super("messageUpdate");
  }

  async onMessageUpdate(discordBot, oldMessage, newMessage) {
    if(oldMessage)
    {
      console.log(`${oldMessage.content}`);      
    }
    if(newMessage)
    {
      console.log(`${newMessage.contents} :`);      
    }
  }

  async execute(discordBot, ...args) {
    const oldMessage = args[0];
    const newMessage = args[1];
    await this.onMessageUpdate(discordBot, oldMessage, newMessage);
  }
}

module.exports = new OnMessageUpdate();