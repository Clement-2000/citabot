const OnEvent = require("../OnEvent.js");
class OnGuildCreate extends OnEvent {
  constructor() {
    super("guildCreate");
  }

  async onGuildCreate(discordBot, guild) {
    console.log(`the client joins a guild`);
  }

  async execute(discordBot, ...args) {
    const guild = args[0];
    await this.onGuildCreate(discordBot, guild);
  }
}

module.exports = new OnGuildCreate();