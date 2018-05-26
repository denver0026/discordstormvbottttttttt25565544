const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Ping: **' + client.ping + '**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Pingi gösterir.',
  usage: 'ping'
};
