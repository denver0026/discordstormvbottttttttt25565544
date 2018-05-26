const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, params) => {
  const yardım4 = new Discord.RichEmbed()
  .setTitle("STORM AFK Komut Yardımı:")
  .setDescription('**ALİ KARAÇAYIR**')
  .setColor("RANDOM")
  .addField("__**MÜZİK KOMUTLARI**__","**st*oynat [LİNK] :** İstenilen müziği çalar\n**st*geç :** Oynatma listesindeki şarkıyı geçer\n**st*dur :** Oynatılan müziği durdurur\n**st*ses (0/100) :** Müziğin ses seviyesini değiştirir")
  .setFooter('BU BOT 🌌Ali TARAFINDAN YAPILMIŞTIR...')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  message.channel.send(yardım4);
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
      aliases: ['yardım8', 'h', 'halp', 'help', 'müzik'],
      permLevel: 0
    };
    
    exports.help = {
      name: 'müzik',
      description: 'Müzik Komutlarını Gösterir',
      usage: 'müzik'
    };