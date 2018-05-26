const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, params) => {
  const yardım2 = new Discord.RichEmbed()
  .setTitle("STORM Yılbaşı Komut Yardımı:")
  .setDescription('**ALİ KARAÇAYIR**')
  .setColor("RANDOM")
  .addField("__**YILBAŞI KOMUTLARI**__","**st*yılbaşıgif :** Yılbaşı Gifleri Atar\n\n__**BU KOMUTLAR YILBAŞINDAN 1 HAFTA SONRAYA KADAR GEÇERLİDİR**__")
  .setFooter('BU BOT 🌌Ali TARAFINDAN YAPILMIŞTIR...')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  message.channel.send(yardım2);
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
    aliases: ['yardım2', 'h', 'halp', 'help', 'y'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım2',
    description: 'Yılbaşı Komutlarını Gösterir.',
    usage: 'yardım2'
  };