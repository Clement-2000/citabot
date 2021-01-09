const config = require("../config.json");
const Command = require("../Command.js");
const CommandException = require("../CommandException");

class Clear extends Command {
  constructor() {
    super(
      "clear", //name
      ["delete", "remove"], //aliases
      [], //permissions
      [config.ADMIN_ROLE], //roles
      0, //args
      1, //usersMentions
      0, //rolesMentions
      0, //channelsMentions
      "clear <number>", //usage
      "Clears the ammount of messages specified.", //description
      true, //guildOnly
      0 //cooldown
    );
  }
  execute(discordBot, message, args) {
    super.execute(message, args).then(() => { 
      message.delete(); 
      message.channel.messages.fetch({limit: parseInt(args[0])}).then(messages => {
        messages.forEach(m => {
          m.delete();
        }).then(() => {
          message.channel.send(`Deleted **${args[0]}** messages!`).then(msg => setTimeout(() => {
            msg.delete(); 
          }, 1000));
        });
      });
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

module.exports = new Clear();
