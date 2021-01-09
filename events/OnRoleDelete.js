const OnEvent = require("../OnEvent.js");
class OnRoleDelete extends OnEvent {
  constructor() {
    super("roleDelete");
  }

  async onRoleDelete(discordBot, role) {
    console.error(`a guild role ${role} is deleted`);
  }

  async execute(discordBot, ...args) {
    const role = args[0];
    await this.onRoleDelete(discordBot, role);
  }

}

module.exports = new OnRoleDelete();