const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Önerini yazmayı unuttun.');
        message.channel.send("**TAVSİYENİ YAPTIN ADAMIM YAPIMCIYA ULAŞTI EN FAZLA 48 SAAT İÇİNDE CEVAP GELECEK BEKLEMEDE KAL**")
    let str = "<@321980072305098754>";
    let id = str.replace(/[<@!>]/g, '');
    bot.fetchUser(id)
        .then(user => {user.send(`Öneri : **${mesaj}**\nGönderen: **${message.author.username}**`)})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öner', 'tavset'],
  permLevel: 0
};

exports.help = {
  name: 't',
  description: 'ss',
  usage: 'ss'
};
