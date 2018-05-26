const Discord = require('discord.js');
exports.run = (client, message, args) => {
  var yılbaşı = ['Yılbaşınız Kutlu Olsun https://cdn.discordapp.com/attachments/387643034533101578/388707030887563276/yeniyil-gifleri-1.gif', 'Nice yıllara https://cdn.discordapp.com/attachments/368340646030999552/388708625151164416/mektup7213.gif', 'Storm Mutlu Yıllar Diler https://cdn.discordapp.com/attachments/368340646030999552/388712840804171776/giphy.gif', 'Bir Yıl Daha Geride Kaldı https://cdn.discordapp.com/attachments/368340646030999552/388708681681862658/yilbasi-karti-hareketli-resim-0011.gif', 'Mutlu Yıllar https://cdn.discordapp.com/attachments/368340646030999552/388708749252100096/yilbasi-karti-hareketli-resim-0061_1.gif', 'Tombalaya 4. aranır https://cdn.discordapp.com/attachments/368340646030999552/388708755899940864/yilbasi-karti-hareketli-resim-0013.gif'];
  var cevap = yılbaşı[Math.floor(Math.random() * yılbaşı.length)];
  message.reply(cevap);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["atom", "ab"],
    permLevel: 0
  };
  exports.help = {
    name: 'yılbaşıgif',
    description: 'Yılbaşı Giflerini Gösterir',
    usage: 'yılbaşıgif'
  };
