const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("STORM Bot Komut Yardımı:")
  .setDescription('**ALİ KARAÇAYIR**')
  .setColor("RANDOM")
  .addField("__**YARDIM KOMULARI**__","**st*yardım1 :** Eğlence komutlarını gösterir\n**st*yardım2 :** Yılbaşı komutlarını gösterir\n**st*yardım3 :** Yetkili komutlarını gösterir\n**st*yardım4 :** AFK komutlarını gösterir\n**st*yardım5 :** Davet komutlarını gösterir\n**st*yardım6 :** Bilgi komutlarını gösterir\n**st*yardım7 :** NSFW Komutlarını Gösterir\n**st*müzik :** Müzik komtlarını gösterir\n**st*sistemler :** Botun sistemlerini gösterir\n**st*ykomut :** Yapımcı komutlarını gösterir")
  .setFooter('Bu Bot 🌌Ali  Tarafından Hazırlanmıştır...')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
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
  aliases: ['yardım', 'h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'tüm komutları gösterir.',
  usage: 'yardım'
};
