const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, params) => {
  const yardım3 = new Discord.RichEmbed()
  .setTitle("STORM Yetkili Komut Yardımı:")
  .setDescription('**ALİ KARAÇAYIR**')
  .setColor("RANDOM")
  .addField("__**YETKİLİ KOMUTLARI**__","**st*anketaç :** Oylama yapmaya yarar\n**st*y :** istenilen kullanıcıyı yasaklar\n**st*yk :** Yasaklanan kullanıcının yasağını kaldırır\n**st*u :** istenilen kullanıcıyı uyarır\n**st*s :** istenilen kullanıcıyı susturur\n**st*at :** istenilen kullanıcıyı sunucudan atar\n**st*kilit :** istenilen odayı kilitler\n")
  .setFooter('BU BOT 🌌Ali TARAFINDAN YAPILMIŞTIR...')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  message.channel.send(yardım3);
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
      aliases: ['yardım3', 'h', 'halp', 'help', 'y'],
      permLevel: 0
    };
    
    exports.help = {
      name: 'yardım3',
      description: 'Yetkili Komutlarını Gösterir.',
      usage: 'yardım3'
    };