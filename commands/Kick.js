const config = require("../config.json");
const Command = require("../Command.js");
const CommandException = require("../CommandException");

class Kick extends Command {
  constructor() {
    super(
      "kick", //name
      [], //aliases
      [], //permissions
      [config.ADMIN_ROLE], //roles
      0, //args
      1, //usersMentions
      0, //rolesMentions
      0, //channelsMentions
      "kick [member] [reason]", //usage
      "Kicks the specified member", //description
      true, //guildOnly
      0 //cooldown
    );
  }
  execute(discordBot, message, args) {
    super.execute(discordBot, message, args).then(() => { 
        var user = message.guild.member(message.mentions.users.first()); 

        if (!user){
          throw new CommandException("The user does not exist"); 
        }
        
        user.kick();

        message.channel.send(`Successfully kicked ${user}`);
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

module.exports = new Kick();
