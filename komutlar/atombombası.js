const Discord = require('discord.js');
exports.run = (client, message, args) => {
  var cevaplar = ['BUM https://cdn.discordapp.com/attachments/382580600697126924/384321667897229312/atom_bomba.gif', 'NİCE VURUŞ https://cdn.discordapp.com/attachments/382580600697126924/384321657923305472/nykleer_bomba_deniz.gif', 'Serinlemiş oldular efendim... https://cdn.discordapp.com/attachments/382580600697126924/384321653192130561/atom_bombas_nykleer.gif','Bir de böyle bakalım https://cdn.discordapp.com/attachments/382580600697126924/384321608950743075/atom_bomba_siyah_beyaz.gif','geri sarıp bir daha bakalım https://cdn.discordapp.com/attachments/382580600697126924/384321608615198720/atom_bombas.gif'];
  var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
  message.reply(cevap);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["atom", "ab"],
    permLevel: 0
  };
  exports.help = {
    name: 'abombası',
    description: 'Atom bombası patlat',
    usage: 'abombası'
  };
