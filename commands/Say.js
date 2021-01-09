const config = require("../config.json");
const Command = require("../Command.js");
const CommandException = require("../CommandException")

class Help extends Command {
  constructor() {
    super(
      "say", //name
      [], //aliases
      [], //permissions
      [config.ADMIN_ROLE], //roles
      0, //args
      0, //usersMentions
      0, //rolesMentions
      0, //channelsMentions
      "say [message]", //usage
      "Makes the bot say things", //description
      true, //guildOnly
      0 //cooldown
    );
  }
  execute(discordBot, message, args) {
    super
      .execute(discordBot, message, args)
      .then(() => {
        message.delete();
        message.channel.send(args.join(" "));
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

module.exports = new Help();
