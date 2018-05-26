const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, params) => {
  const yardım1 = new Discord.RichEmbed()
  .setTitle("STORM Eğlence Komut Yardımı:")
  .setDescription('**ALİ KARAÇAYIR**')
  .setColor("RANDOM")
  .addField("__**EĞLENCE KOMUTLARI**__","**st*mcip <link> :** İstediğiniz sunucunun bilgisini verir\n**st*çılgınol :** Çılgınlık yapar\n**st*çekiç :** İstediğiniz kişiye çekiç atar\n**st*çayiç :** Çay içer\n**st*espiri :** Espiri yapar\n**st*abombası :** Atom bombası patlatır\n**st*ıq :** ıq nuzu ölçer\n**st*yaz :** Yazı yazar\n**st*aletim :** Malafat boyunuzu gösterir\n**st*sor :** Soru sorar\n**st*topla,çıkar,çarp,böl :** Matematik işlemi yapar\n**st*ag :** Avatarınızı Gösterir\n**st*kka :** İsminizin Yazdığı Avatarınızı Gösterir\n**st*ga [URL] :** İstediğiniz Görüntüyü Gösterir\n**st*gtç [URL] :** İstediğiniz Görüntünün Renklerini Ters Çevirir\n**st*gd [URL] :** İstediğiniz Görüntüyü Döndürür\n**st*gb [URL] :** İstediğiz Görüntüyü Discord PP Boyutlarında gösterir\n**st*devamedecek :** To be contunied efekti ekler\n**st*yt :** Yazı tura atar\n**st*rsat :** Rastgele sayı atar\n**st*yazi :** Minecraft yazısı yazar\n")
  .setFooter('BU BOT 🌌Ali TARAFINDAN YAPILMIŞTIR...')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  message.channel.send(yardım1);
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
    aliases: ['yardım1', 'h', 'halp', 'help', 'y'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım1',
    description: 'Eğlence Komutlarını Gösterir.',
    usage: 'yardım1'
  };