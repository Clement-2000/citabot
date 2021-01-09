const OnEvent = require("../OnEvent.js");
class OnGuildMemberRemove extends OnEvent {
  constructor() {
    super("guildMemberRemove");
  }

  async onGuildMemberRemove(discordBot, member) {
    console.log(`member has been left a guild`);
    const vWelcomeChannel = member.guild.channels.cache.find(x => x.name == discordBot.config.WELCOME_CHANNEL);
    vWelcomeChannel.send(`Au revoir ${member}`); 
  }
  
  async execute(discordBot, ...args) {
    const member = args[0];
    await this.onGuildMemberRemove(discordBot, member);
  }
}

module.exports = new OnGuildMemberRemove();
