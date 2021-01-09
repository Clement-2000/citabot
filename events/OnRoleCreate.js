const OnEvent = require("../OnEvent.js");
class OnRoleCreate  extends OnEvent{
  constructor() {
    super("roleCreate");
  }

  async onRoleCreate(discordBot, role) {
    console.error(`a guild role ${role}`);
  }

  async execute(discordBot, ...args) {
    const role = args[0];
    await this.onRoleCreate(discordBot, role);
  }
}

module.exports = new OnRoleCreate();