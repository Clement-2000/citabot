const OnEvent = require("../OnEvent.js");
class OnRoleUpdate extends OnEvent {
  constructor() {
    super("roleUpdate");
  }

  async onRoleUpdate(discordBot, oldRole, newRole) {
    console.error(`a guild role ${oldRole}, ${newRole} is updated`);
  }

  async execute(discordBot, ...args) {
    const oldRole = args[0];
    const newRole = args[1];
    await this.onRoleUpdate(discordBot, oldRole, newRole);
  }
}

module.exports = new OnRoleUpdate();