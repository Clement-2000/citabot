const OnEvent = require("../OnEvent.js");
class OnClientUserGuildSettingsUpdate extends OnEvent{
  constructor() {
    super("clientUserGuildSettingsUpdate");
  }
  
  async onClientUserGuildSettingsUpdate(discordBot, clientUserGuildSettings) {
    console.log(
      `clientUserGuildSettingsUpdate -> client user's settings update`
    );
  }

  async execute(discordBot, ...args) {
    const clientUserGuildSettings = args[0];
    await this.onClientUserGuildSettingsUpdate(discordBot, clientUserGuildSettings);
  }
}

module.exports = new OnClientUserGuildSettingsUpdate();

