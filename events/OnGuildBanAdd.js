const OnEvent = require("../OnEvent.js");
class OnGuildBanAdd extends OnEvent {
  constructor() {
    super("guildBanAdd");
  }

  async onGuildBanAdd(discordBot, guild, user) {
    console.log(`Guild ${guild} has banned user ${user}`);
  }

  async execute(discordBot, ...args) {
    const guild = args[0];
    const user = args[1];
    await this.onGuildBanAdd(discordBot, guild, user);
  }
}

module.exports = new OnGuildBanAdd();
