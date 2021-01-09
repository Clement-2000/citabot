const OnEvent = require("../OnEvent.js");
class OnGuildMembersChunk extends OnEvent{
  constructor() {
    super("guildMemberChunk");
  }

  async onGuildMembersChunk(discordBot, members, guild) {
    console.error(`a chunk of guild members is received`);
  }

  async execute(discordBot, ...args) {
    const members = args[0];
    const guild = args[1];
    await this.onGuildMembersChunk(discordBot, members, guild);
  }
}

module.exports = new OnGuildMembersChunk();