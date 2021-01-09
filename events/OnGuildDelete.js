const OnEvent = require("../OnEvent.js");
class OnGuildDelete extends OnEvent {
  constructor() {
    super("guildDelete");
  }

  async onGuildDelete(discordBot, guild) {
    console.log(`the client deleted/left a guild`);
  }

  async execute(discordBot, ...args) {
    const guild = args[0];
    await this.onGuildDelete(discordBot, guild);
  }
}

module.exports = new OnGuildDelete();