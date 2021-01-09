const OnEvent = require("../OnEvent.js");
class OnReconnecting extends OnEvent {
  constructor() {
    super("clientUserSettingsUpdate");
  }
    
  async onClientUserSettingsUpdate(discordBot, clientUserSettings) {
    console.log(`clientUserSettingsUpdate -> client user's settings update`);
  }
  
  async execute(discordBot, ...args) {
    const clientUserSettings = args[0];
    await this.onClientUserSettingsUpdate(discordBot, clientUserSettings);
  }
}

module.exports = new OnReconnecting();

