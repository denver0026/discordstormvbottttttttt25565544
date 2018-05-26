const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var result = Math.floor((Math.random() * 2) + 1);
    if (result == 1) {
     message.channel.send({embed: {
       color: 0xf70f7d,
       'image': {
       'url': ("https://i.hizliresim.com/rJDLmz.png"),
       },
     }});
    } else if (result == 2) {
     message.channel.send({embed: {
       color: 0xf70f7d,
       'image': {
       'url': ("https://i.hizliresim.com/yzDdmM.png")
        },
     }});  }
   }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-tura', 'y-t'],
  permLevel: 0
};

exports.help = {
  name: 'yt',
  description: 'yazıtura atar',
  usage: 'yt'
};
