const config = require("../config.json");
const Command = require("../Command.js");
const CommandException = require("../CommandException");

class Help extends Command {
  constructor() {
    super(
      "hi", //name
      ["hello", "hey", "salut", "coucou"], //aliases
      [], //permissons
      [], //roles
      0, //args
      0, //usersMentions
      0, //rolesMentions
      0, //channelsMentions
      "hi", //usage
      "Says hello", //description
      false, //guildOnly
      0 //cooldown
    );
  }
  execute(discordBot, message, args) {
    super
      .execute(discordBot, message, args)
      .then(() => {
        message.channel.send("Hi!");
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
