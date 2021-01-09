const OnEvent = require("../OnEvent.js");
class OnGuildBanRemove extends OnEvent {
  constructor() {
    super("guildBanRemove");
  }
  
  async onGuildBanRemove(discordBot, guild, user) {
    console.log(`Guild ${guild} has banned user ${user}`);
  }
    
  async execute(discordBot, ...args) {
    const guild = args[0];
    const user = args[1];
    await this.onGuildBanRemove(discordBot, guild, user);
  }
}

module.exports = new OnGuildBanRemove();
