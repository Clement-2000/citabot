const OnEvent = require("../OnEvent.js");
class OnUserNoteUpdate extends OnEvent {
  constructor() {
    super("userNoteUpdate");
  }

  async onUserNoteUpdate(discordBot, user, oldNote, newNote) {
    console.log(`a member's note is updated`);
  }

  async execute(discordBot, ...args) {
    const user = args[0];
    const oldNote = args[1];
    const newNote = args[2];
    await this.onUserNoteUpdate(discordBot, user, oldNote, newNote);
  }

}

module.exports = new OnUserNoteUpdate();