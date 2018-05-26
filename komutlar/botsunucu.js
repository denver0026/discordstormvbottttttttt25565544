const Discord = require("discord.js")
exports.run =  function (bot, message) {
    const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
       
     embed.addField(`${guild.name}|  ${guild.memberCount}kullanıcı`,guild.id);
      embed.setColor('#00ffff')
      embed.setTitle('Servers')
      embed.setDescription(`Şu an ${bot.guilds.size} server de bulunuyorum`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sw'],
  permLevel: 4
};

exports.help = {
  name: 'Bu Komut Gizlidir',
  description: 'Bu Komut Gizlidir',
  usage: 'servers'
};