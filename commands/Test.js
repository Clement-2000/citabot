const config = require("../config.json");
const Command = require("../Command.js");
const CommandException = require("../CommandException.js"); 

class Help extends Command {
  constructor() {
    super(
      "test", //name
      [], //aliases
      [], //permissions
      [], //roles
      0, //args
      0, //usersMentions
      0, //rolesMentions
      0, //channelsMentions
      "test", //usage
      "Test command", //description
      true, //guildOnly
      0 //cooldown
    );
  }

  async execute(discordBot, message, args) {
    super
      .execute(discordBot, message, args)
      .then(() => {
        message.channel.send("Success!")
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
