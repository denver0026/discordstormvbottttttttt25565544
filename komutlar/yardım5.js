const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, params) => {
  const yardım5 = new Discord.RichEmbed()
  .setTitle("STORM Davet Komut Yardımı:")
  .setDescription('**ALİ KARAÇAYIR**')
  .setColor("RANDOM")
  .addField("__**DAVET KOMUTLARI**__","**st*bdavet :** Botun davet linkini atar\n**st*davet:** Bot sunucusunun linkini atar\n")
  .setFooter('BU BOT 🌌Ali TARAFINDAN YAPILMIŞTIR...')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  message.channel.send(yardım5);
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
      aliases: ['yardım5', 'h', 'halp', 'help', 'y'],
      permLevel: 0
    };
    
    exports.help = {
      name: 'yardım5',
      description: 'Davet Komutlarını Gösterir.',
      usage: 'yardım5'
    };