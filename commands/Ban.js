const config = require("../config.json");
const Command = require("../Command.js");
const CommandException = require("../CommandException");

class Ban extends Command {
  constructor() {
    super(
      "ban", //name
      [], //aliases
      [], //permissions
      [config.ADMIN_ROLE], //roles
      0, //args
      1, //usersMentions
      0, //rolesMentions
      0, //channelsMentions
      "ban [member] [reason]", //usage
      "Bans the specified member", //description
      true, //guildOnly
      0 //cooldown
    );
  }
  execute(discordBot, message, args) {
    super.execute(message, args).then(() => { 
        var user = args[0].replace("<@!", "").replace(">", "");

        message.guild.members.ban(user); 

        message.channel.send(`Successfully banned <@!${user}> (${user.tag})`);
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

module.exports = new Ban();
