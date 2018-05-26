const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, params) => {
  const sistemler = new Discord.RichEmbed()
  .setTitle("STORM Sistem Bilgi Yardımı:")
  .setDescription('**ALİ KARAÇAYIR**')
  .setColor("RANDOM")
  .addField("__**SİSTEMLER**__","**GİRİŞ-ÇIKIŞ** Sistemi İçin:\nYAZMASINI İSTEDİĞİN KANALA **st*gcayarla** YAZMAN YETERLİ\n**BAN-KİCK-UYARI-SUSTUMA** için:\n**st-log** kanalı açmalısın\n**OTO ROL AYARLAMAK** için:\nOto rol açmak için:**st*otorolac** Oto rol kapamak için:**st*otorolkapat**\n__**OTO ROL KİME VERİLDİĞİNİ GÖRMEK İÇİN :**__ **#otorol-bilgi** __**KANALI AÇMANIZ YETERLİ**__\n**REKLAM ÖNLEYİCİ** Kurmak için\n**st*antireklam :** Reklam önleyiciyi açar **st*reklambildirim :** Reklam yapanların hangi kanalda yazacağını belirler\n")
  .setFooter('BU BOT 🌌Ali TARAFINDAN YAPILMIŞTIR...')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  message.channel.send(sistemler);
} else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['sistemler', 'h', 'halp', 'help', 'y'],
      permLevel: 0
    };
    
    exports.help = {
      name: 'sistemler',
      description: 'Sistem Bilgisini Gösterir.',
      usage: 'sistemler'
    };