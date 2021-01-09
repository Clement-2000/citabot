const config = require("../config.json");
const Command = require("../Command.js");
const CommandException = require("../CommandException");

class Ping extends Command {
  constructor() {
    super(
      "ping", //name
      ["pong"], //aliases
      [], //permissions
      [],  //roles
      0, //args
      0, //usersMentions
      0, //rolesMentions
      0, //channelMentions
      "ping", //usage
      "Bot's activity testing command. Answer : 'Pong!'.", //description
      false, //guildOnly
      0 //cooldown
    );
  }

  execute(discordBot, message, args) {
    super
      .execute(discordBot, message, args)
      .then(() => {
        const embed = new discordBot.discord.MessageEmbed()
        .setAuthor(
          discordBot.client.user.username,
          discordBot.client.user.displayAvatarURL(),
          discordBot.config.URL
        )
        .setColor(discordBot.client.OK_COLOR)
        .setDescription(`Pong!`)
        .setThumbnail(message.author.displayAvatarURL());
          
        message.channel.send(embed);
      }
    )
    .catch(error => {
      console.log(error);
      if (error instanceof CommandException){
        message.channel.send(error.errorMessage);
      } 
      else {
        message.channel.send(discordBot.config.ERROR_MESSAGE);
      }

      return;
    });
  }
}

module.exports = new Ping();
