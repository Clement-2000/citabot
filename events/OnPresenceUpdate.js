const OnEvent = require("../OnEvent.js");
class OnPresenceUpdate extends OnEvent {
  constructor() {
    super("presenceUpdate");
  }

  async onPresenceUpdate(discordBot, oldMember, newMember) {
    //console.log(`member presence has been updated`);
  }
  
  async execute(discordBot, ...args) {
    const oldMember = args[0];
    const newMember = args[1];
    await this.onPresenceUpdate(discordBot, oldMember, newMember);
  }
}

module.exports = new OnPresenceUpdate();
