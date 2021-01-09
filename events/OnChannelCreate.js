const OnEvent = require("../OnEvent.js");
class OnChannelCreate extends OnEvent {
  constructor() {
    super("channelCreate");
  }

  async onChannelCreate(discordBot, channel) {
    if (channel.type == "unknown" || channel.type == "dm") {
      return;
    }
    
    console.log(`channelCreate: ${channel}`);

    const logChannel = channel.guild.channels.cache.find(ch => ch.name === discordBot.config.LOG_CHANNEL);

    const embed = new discordBot.discord.MessageEmbed()
          .setColor(discordBot.config.OK_COLOR)
          .setTitle("✏️ New channel created")
          .setDescription(`__Name:__ ${channel} (${channel.name})\n__ID:__ ${channel.id}\n__Time:__ ${new Date().toUTCString()}`);

    logChannel.send(embed);
  }

  async execute(discordBot, ...args) {
    const channel = args[0];
    await this.onChannelCreate(discordBot, channel);
  }
}

module.exports = new OnChannelCreate();
