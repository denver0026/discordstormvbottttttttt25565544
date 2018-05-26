const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
      color: 757272,
      title: "** :punch:  StormBOT :punch: **",
      url: "https://discordapp.com/oauth2/authorize?client_id=382895566222393345&scope=bot&permissions=2146958591",
      description: "Discord bot davet linki",
    }})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'bdavet',
  description: 'Botun davet linkini gonderir.',
  usage: 'bdavet'
};
