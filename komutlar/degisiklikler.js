const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
               author: {
                   name: "Genel Sürüm : 1.5.2V - Yapılan değişiklikler",
                   icon_url: ""
                 },
               color: 0xD97634,
               description: "**BOTA YENİ GÖRÜNTÜ KOMUTLARI GELDİ** __**st*ag**__ __**st*kka [URL]**__ __**st*ga [URL]**__ __**st*gtç [URL]**__ __**st*gd [URL]**__ __**st*gb [URL]**__\n**BOTUN YARDIM KISMI DEĞİŞTİ**\n**BOTA SUNUCULAR KOMUDU GELDİ**\n**BOTA DEVAMEDECEK KOMUDU GELDİ**\n**BOTA YENİ ANKET(OYLAMA) KOMUDU GELDİ** __**st*anketaç**__\n**BOTA MCİP KOMUDU GELDİ**\n**BOTA MÜZİK KOMUTLARI GELDİ**"
             }});
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['p'],
 permLevel: 0
};

exports.help = {
 name: 'değişiklikler',
 description: 'Değişiklikleri gösterir.',
 usage: 'değişiklikler'
};
