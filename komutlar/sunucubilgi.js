const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

    const embed = new Discord.RichEmbed()
    .setColor(0xFF4000)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .addField('İsim kısaltması:', message.guild.nameAcronym, true)
    .addField('Kimliği:', message.guild.id, true)
    .addField('Bölgesi:', message.guild.region, true)
    .addField('Sahibi:', message.guild.owner, true)
    .addField('Doğrulama seviyesi:', message.guild.verificationLevel, true)
    .addField('Üyeler:', `${message.guild.members.filter( member => member.user.bot).size} bot / ${message.guild.memberCount} üye`, true)
    .addField('Varsayılan rol:', message.guild.defaultRole, true)
    .addField('Roller:', message.guild.roles.map(role => role.name).join(', '), true)
    .addField('Kanallar:', `${message.guild.channels.filter(chan => chan.type === 'voice').size} sesli / ${message.guild.channels.filter(chan => chan.type === 'text').size} metin`, true)
    .addField('Kanal sayısı:', message.guild.channels.size, true)
    .addField('Ana kanalı:', message.guild.defaultChannel, true)
    .addField('Sistem kanalı:', message.guild.systemChannel, true)
    .addField('AFK kanalı:', message.guild.afkChannel, true)
    .addField('AFK zaman aşımı:', message.guild.afkTimeout, true)
    .addField('Oluşturma tarihi:', message.guild.createdAt, true)
    .setFooter('Sunucu bilgi', message.guild.iconURL)
    .setTimestamp()
    message.channel.send({embed});
    message.react('✅')
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sbilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sbilgi'
};
