const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setDescription('malesef istediginizi yapamam yapımcım izin vermiyor')
    return message.author.sendEmbed(ozelmesajuyari); }
    let twitchtitle = args.slice(0).join(' ');
    if (twitchtitle.length < 1) return message.reply('Yayin için herhangi bir baslik yazmalısın.');
  message.delete();
  client.user.setStatus("");
  client.user.setGame(`${twitchtitle}`, 'https://twitch.tv/GazGozTV');
  message.channel.send(`yayın komudu ayarlandi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yayın', 'twitch-on', 'yayin-ac'],
  permLevel: 4
};

exports.help = {
  name: 'yayın',
  description: 'Botun yayin basligini gösterir.',
  usage: 'yayin <twitch basligi>'
};
