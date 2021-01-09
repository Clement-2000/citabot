const OnEvent = require("../OnEvent.js");
class OnGuildUpdate extends OnEvent{
  constructor() {
    super("guildUpdate");
  }
  
  async onGuildUpdate(discordBot, oldGuild, newGuild) {
    console.error(`a guild is updated`);
  }

  async execute(discordBot, ...args) {
    const oldGuild = args[0];
    const newGuild = args[1];
    await this.onGuildUpdate(discordBot, oldGuild, newGuild);
  }
}

module.exports = new OnGuildUpdate();