const config = Object.assign({}, require("./config.json"), require("./confidential_config.json"));

class DiscordBot {
  constructor() {
    this._fs = require("fs");
    this._discord = require("discord.js");
    this._intents = this._discord.Intents.ALL; 
    this._client = new this._discord.Client();
    this._ms = require("ms");
    this._client.commands = new this._discord.Collection();

    const commandFiles = this._fs
      .readdirSync("./commands")
      .filter(fileFound => fileFound.endsWith(".js"));
    for (const commandFile of commandFiles) {
      const command = require(`./commands/${commandFile}`);
      this._client.commands.set(command.name, command);
    }
    //this.sqlite = require("better-sqlite3");
    //this.sql = new this.sqlite("./discordbot.sqlite");
  }

  login() {
    this._client.login(config.TOKEN);
    this._client.clearImmediate();
    this._client.removeAllListeners();

    const eventsFiles = this._fs
      .readdirSync("./events")
      .filter(fileFound => fileFound.endsWith(".js"));
    for (const file of eventsFiles) {
      const event = require(`./events/${file}`);
      this._client.on(event.eventName, (...args) => {
        event.execute(this, ...args);
      });
    }
  }

  get discord() {
    return this._discord;
  }

  get client() {
    return this._client;
  }

  get config() {
    return config;
  }

  get functions() {
    return require("./functions/Functions.js");
  }

  get sql() {
    return this._sql;
  }
}

module.exports = new DiscordBot();

