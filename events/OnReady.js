const OnEvent = require("../OnEvent.js");

class OnReady extends OnEvent {
  constructor() {
    super("ready");
  }

  async onReady(discordBot) {
    var status = [
      "❓ Tapez : !help",
      "Vive les Citaro ! 🚌",
      "🎉 Bonne Année !", 
      "🧼 Respectez les gestes barrière 😷", 
      "Payez votre ticket ! 🎫",
      "🛠️ Bot en développement ⚙️"
    ];

    var index = 0;

    setInterval(() => {
      discordBot.client.user.setPresence({activity: {name: status[index]}});
      index += 1;
      if (index >= status.length) {
        index = 0;
      }
    }, 5000);

    console.log(`${discordBot.client.user.tag} - I'm online ...`);

    console.log(
      `${
        discordBot.client.guilds.cache.first().members.cache.size
      } users, in ${
        discordBot.client.guilds.cache.first().channels.cache.size
      } channels of ${discordBot.client.guilds.cache.size} guilds.`
    ); 
  }

  async execute(discordBot, ...args) {
    await this.onReady(discordBot, args);
  }
}

module.exports = new OnReady();
