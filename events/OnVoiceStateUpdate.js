const OnEvent = require("../OnEvent.js");
class OnVoiceStateUpdate extends OnEvent {
  constructor() {
    super("voiceStateUpdate");
  }

  async onVoiceStateUpdate(discordBot, oldMember, newMember) {
    console.log(`a user changes voice state`);
  }

  async execute(discordBot, ...args) {
    const oldMember = args[0];
    const newMember = args[1];
    await this.onVoiceStateUpdate(discordBot, oldMember, newMember);
  }
}

module.exports = new OnVoiceStateUpdate();