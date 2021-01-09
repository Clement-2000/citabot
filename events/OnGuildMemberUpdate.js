const OnEvent = require("../OnEvent.js");
class OnGuildMemberUpdate extends OnEvent {
  constructor() {
    super("guildMemberUpdate");
  }
  
  async onGuildMemberUpdate(discordBot, oldMember, newMember) {
    console.log(`a member has been updated`);
  }

  async execute(discordBot, ...args) {
    const oldMember = args[0];
    const newMember = args[1];
    await this.onGuildMemberUpdate(discordBot, oldMember, newMember);
  }
}

module.exports = new OnGuildMemberUpdate();
