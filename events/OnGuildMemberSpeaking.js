const OnEvent = require("../OnEvent.js");
class OnGuildMemberSpeaking extends OnEvent{
  constructor() {
    super("guildMemberSpeaking");
  }

  async onGuildMemberSpeaking(discordBot, member, speaking) {
    console.log(`a guild member starts/stops speaking: ${member.tag}`);
  }
  
  async execute(discordBot, ...args) {
    const member = args[0];
    const speaking = args[1]
    await this.onGuildMemberSpeaking(discordBot, member, speaking);
  }
}

module.exports = new OnGuildMemberSpeaking();