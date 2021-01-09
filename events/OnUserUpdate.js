const OnEvent = require("../OnEvent.js");
class OnUserUpdate  extends OnEvent {
  constructor() {
    super("userUpdate");
  }

  async onUserUpdate(discordBot, oldUser, newUser) {
    console.log(`user's details (e.g. username) are changed`);
  }

  async execute(discordBot, ...args) {
    const oldUser = args[0];
    const newUser = args[1];
    await this.onUserUpdate(discordBot, oldUser, newUser);
  }
}

module.exports = new OnUserUpdate();