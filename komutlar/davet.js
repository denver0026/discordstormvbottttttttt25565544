const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
      color: 757272,
      title: "**:tada: Sunucu davet :tada:**",
      url: "https://discord.gg/yRXfQ7Q",
      description: "**Discord Sunucu Davet linki**...",
    }})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot Sunucusunun Davet linkini gönderir.',
  usage: 'davet'
};
