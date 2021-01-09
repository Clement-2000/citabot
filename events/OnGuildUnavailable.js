const OnEvent = require("../OnEvent.js");
class OnGuildUnavailable extends OnEvent{
  constructor() {
    super("guildUnavailable");
  }

  async onGuildUnavailable(discordBot, guild) {
    console.error(
      `a guild becomes unavailable, likely due to a server outage: ${guild}`
    );
  }

  async execute(discordBot, ...args) {
    const guild = args[0];
    await this.onGuildUnavailable(discordBot, guild);
  }
}

module.exports = new OnGuildUnavailable();