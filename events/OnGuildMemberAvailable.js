const OnEvent = require("../OnEvent.js");
class OnGuildMemberAvailable extends OnEvent {
  constructor() {
    super("guildMemberAvailable");
  }

  async onGuildMemberAvailable(discordBot, member) {
    console.log(`member becomes available in a large guild: ${member.tag}`);
  }

  async execute(discordBot, ...args) {
    const member = args[0];
    await this.onGuildMemberAvailable(discordBot, member);
  }
}

module.exports = new OnGuildMemberAvailable();