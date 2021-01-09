const OnEvent = require("../OnEvent.js");
class OnGuildMemberAdd extends OnEvent {
  constructor() {
    super("guildMemberAdd");
  }

  async onGuildMemberAdd(discordBot, member) {
    console.log(`a new member entered the guild : ${member.tag}`);

    const vWelcomeChannel = member.guild.channels.cache.find(ch => ch.name === discordBot.config.WELCOME_CHANNEL);
    const vPresentationChannel = member.guild.channels.cache.find(ch => ch.name === discordBot.config.PRESENTATION_CHANNEL);
    const vMemberRole = member.guild.roles.cache.find(role => role.name === discordBot.config.MEMBER_ROLE);

    vWelcomeChannel.send(`Bienvenue ${member} ! N'hésites pas à te présenter dans ${vPresentationChannel}`); 

    member.roles.add(vMemberRole); 
  }

  async execute(discordBot, ...args) {
    const member = args[0];
    await this.onGuildMemberAdd(discordBot, member);
  }
}

module.exports = new OnGuildMemberAdd();