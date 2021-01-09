/* Available Permissions :
"ADMINISTRATOR", // (implicitly has all permissions, and bypasses all channel overwrites)
"CREATE_INSTANT_INVITE", // (create invitations to the guild)
"KICK_MEMBERS",
"BAN_MEMBERS",
"MANAGE_CHANNELS",// (edit and reorder channels)
"MANAGE_GUILD",// (edit the guild information, region, etc.)
"ADD_REACTIONS",// (add new reactions to messages)
"VIEW_AUDIT_LOG",
"PRIORITY_SPEAKER",
"STREAM",
"VIEW_CHANNEL",
"SEND_MESSAGES",
"SEND_TTS_MESSAGES",
"MANAGE_MESSAGES",// (delete messages and reactions)
"EMBED_LINKS",// (links posted will have a preview embedded)
"ATTACH_FILES",
"READ_MESSAGE_HISTORY",// (view messages that were posted prior to opening Discord)
"MENTION_EVERYONE",
"USE_EXTERNAL_EMOJIS",// (use emojis from different guilds)
"VIEW_GUILD_INSIGHTS",
"CONNECT",// (connect to a voice channel)
"SPEAK",// (speak in a voice channel)
"MUTE_MEMBERS",// (mute members across all voice channels)
"DEAFEN_MEMBERS",// (deafen members across all voice channels)
"MOVE_MEMBERS",// (move members between voice channels)
"USE_VAD",// (use voice activity detection)
"CHANGE_NICKNAME",
"MANAGE_NICKNAMES",// (change other members' nicknames)
"MANAGE_ROLES",
"MANAGE_WEBHOOKS",
"MANAGE_EMOJIS"
*/
const CommandException = require("./CommandException.js"); 
const discordbot = require("./discordbot.js");

class Command {
  constructor(
    name,
    aliases,
    permissions,
    roles,
    args,
    usersMentions,
    rolesMentions,
    channelsMentions,
    usage,
    description,
    guildOnly,
    cooldown
  ) {
    this._name = name;
    this._aliases = aliases;
    this._permissions = permissions;
    this._roles = roles; 
    this._args = args;
    this._usersMentions = usersMentions;
    this._rolesMentions = rolesMentions;
    this._channelsMentions = channelsMentions;
    this._usage = usage;
    this._description = description;
    this._guildOnly = guildOnly;
    this._cooldown = cooldown;
  }

  get name() {
    return this._name;
  }

  get aliases() {
    return this._aliases;
  }
  
  get permissions() {
    return this._permissions;
  }
  get roles() {
    return this._roles; 
  }

  get args() {
    return this._args;
  }

  get mentions() {
    return this._mentions;
  }

  get usage() {
    return this._usage;
  }

  get description() {
    return this._description;
  }

  get guildOnly() {
    return this._guildOnly;
  }

  get cooldown() {
    return this._cooldown;
  }

  hasPermission(discordBot, message) {
    let hasPermission = true;

    if (this.permissions && this._permissions.length) {
      hasPermission = false;
      const memberAuthor = message.member;
      if (memberAuthor) {
        for(const permissionFound of this._permissions) {
          if (memberAuthor.hasPermission(permissionFound)) {
            hasPermission = true;
            return hasPermission;
          }
        }
      }
      else {
        console.log("Error : no author for this message.");
        hasPermission = false;
        return hasPermission;
      }
    }

    if (this._roles && this._roles.length) {
      hasPermission = false;
      const memberAuthor = message.member;
      if (memberAuthor) {
        for(const roleFound of this._roles) {
          if (memberAuthor.roles.cache.find(role => role.name === roleFound)) {
            hasPermission = true;
            return hasPermission;
          }
        }
      }
      else {
        console.log("Error : no author for this message.");
        hasPermission = false;
        return hasPermission;
      }
    }

    return hasPermission;
  }

  async execute(discordBot, message, args) {
    if (!this.hasPermission(discordBot, message)) {
      throw new CommandException("You don't have rights to execute this command."); 
    }
    if (this._usersMentions > message.mentions.length) {
      throw new CommandException(`You must mention at least ${this.usersMentions} member(s).`);
    }
    if (this._usersMentions > message.mentions.roles.length) {
      throw new CommandException(`You must mention at least ${this.rolesMentions} role(s).`);
    }
    if (this._usersMentions > message.mentions.channels.length) {
      throw new CommandException(`You must mention at least ${this.channelsMentions} channel(s).`);
    }
    if (this._args > 0 && args.length < this.aArgs) {
      throw new CommandException(`You must provide at least ${this.args} parameters.`);
    }
    if (this._guildOnly && message.channel.type !== "text") {
      throw new CommandException("I cannot execute this command in DM channel.");
    }
  }
}

module.exports = Command;
