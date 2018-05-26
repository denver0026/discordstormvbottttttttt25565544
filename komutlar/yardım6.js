const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, params) => {
  const yardım6 = new Discord.RichEmbed()
  .setTitle("STORM Bilgi Komut Yardımı:")
  .setDescription('**ALİ KARAÇAYIR**')
  .setColor("RANDOM")
  .addField("__**BİLGİ KOMUTLARI**__" ,"__**st*değişiklikler :**__ **Yapılan değişiklikleri gösterir**\n\n**st*yapımcı :** Yapımıyı Göcsterir\n**st*tasarımcı :** Tasarımcının ismini gösterir\n**st*botsunucu :** Botun bulunduğu sunucuları gösterir\n**st*istatistik :** Botun istatistiklerini gösterir\n**st*kbilgim :** Sizin hakkınızda bilgi verir\n**st*ping :** Pingimi gösterir\n**st*sor :** Soru sormaya yarar\n**st*sbilgi :** Sunucu hakkında bilgi verir\n**st*yardım :** Yardım panelini açar\n**st*t :** Tavsiye yapmanıza yarar\n")
  .setFooter('BU BOT 🌌Ali TARAFINDAN YAPILMIŞTIR...')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  message.channel.send(yardım6);
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
      aliases: ['yardım6', 'h', 'halp', 'help', 'y'],
      permLevel: 0
    };
    
    exports.help = {
      name: 'yardım6',
      description: 'Bilgi Komutlarını Gösterir.',
      usage: 'yardım6'
    };