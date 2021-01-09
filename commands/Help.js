const config = require("../config.json");
const Command = require("../Command.js");
const CommandException = require("../CommandException");

class Help extends Command {
  constructor() {
    super(
      "help", //name
      ["aide"], //aliases
      [], //permissions
      [], //roles
      0, //args
      0, //usersMentions
      0, //rolesMentions
      0, //channelsMentions
      "help", //usage
      "Show all bot's commands help.", //description
      false, //guildOnly
      0 //cooldown
    );
  }
  execute(discordBot, message, args) {
    super
      .execute(discordBot, message, args)
      .then(() => {
        let embed = new discordBot.discord.MessageEmbed()
        .setColor(discordBot.config.OK_COLOR)
        .setTitle(`__**${discordBot.client.user.username}**__ command panel`)
        .setAuthor(
          `${discordBot.client.user.username}`,
          `${discordBot.client.user.displayAvatarURL()}`,
          discordBot.config.URL
        )
        .setDescription("__**Command list :**__")
        .setThumbnail(`${discordBot.client.user.displayAvatarURL()}`);
      for (const command of discordBot.client.commands.array()) {
        if (command.hasPermission(discordBot, message)) {
          let name = `**${command.name}**`;
          if (command.aliases.length) {
            name += ` Aliases : `;
            const aliases = command.aliases;
            for (const vAlias of aliases) {
              name += `${vAlias} `;
            }
          }
          embed.addField(
            `${name}`,
            `Usage : ${command.usage}\n${command.description}`,
            false
          );
        }
      }
      message.channel.send(embed);
    })
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

module.exports = new Help();
