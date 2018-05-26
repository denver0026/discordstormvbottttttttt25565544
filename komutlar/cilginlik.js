const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['***LANET BİÇIS BİSİKLETİ İYİ KULLANIYORSUN*** https://cdn.discordapp.com/attachments/382580600697126924/387650998664953867/bisiklet_780x428-y73hpk9wii.gif','***KAYKAYDA ADRENALİN DİYE BUNA DERİM*** https://cdn.discordapp.com/attachments/382580600697126924/387651009452703744/kalp-krizine-neden-olur_780x431-kb2puqw0bz.gif','***BAZEN SADECE İZLERSİN...*** https://cdn.discordapp.com/attachments/382580600697126924/387651036476735492/bas-dondurucu_780x419-h2909wa3k2.gif','***AKSİYONU SEVİYORSUN BEBEĞİM*** https://cdn.discordapp.com/attachments/382580600697126924/387651075060137984/durabildi-mi-duramadi-mi-acaba_780x431-bzej9mfipz.gif','***ŞANSIN MI VAR BİLMEM AMA ETKİLEYİCİSİN*** https://cdn.discordapp.com/attachments/382580600697126924/387651578003193876/insanlar-normal-yerde-kalkamiyor-amuda_780x425-la5nru91qr.gif','***TEHLİKEYİ ÇOK MU SEVİYON?*** https://cdn.discordapp.com/attachments/382580600697126924/387651576493244416/ya-tutamasa_780x425-5qln3xxhby.gif',
   '***DOSTUM MÜKEMMELDİ** https://cdn.discordapp.com/attachments/382580600697126924/387651521698856960/tamam-sakin-olalim_780x425-sgc1ev24bc.gif ','***DİGGAD ED BEBEGİM*** https://cdn.discordapp.com/attachments/382580600697126924/387651438114766858/denge-onemli_780x425-e9jcc0fe24.gif***','***NİCE ADRENALİN*** https://cdn.discordapp.com/attachments/382580600697126924/387651365687656448/hadi-asagiya_780x431-xt8yj2pfb1.gif','***YEAH BEBEGİM*** https://cdn.discordapp.com/attachments/382580600697126924/387651363561144321/adrenalinin-dibi_780x432-dz3intcwu3.gif','***DİYECEK SOZ YOK*** https://cdn.discordapp.com/attachments/382580600697126924/387651314080808980/her-sey-bu-manzara-icin-olabilir_780x431-jj8wjmskp4.gif','***ŞAKA MI YAPTIN AZ ÖNCE*** https://cdn.discordapp.com/attachments/382580600697126924/387651251095076865/saka-yapmak-istemis_780x380-odmva7i3q8.gif',
   '***YAVAŞ*** https://cdn.discordapp.com/attachments/382580600697126924/387651236067016704/duz-yaptin-bir-de-bu-kaldi_780x431-xix4p33rok.gif','***NABIYON????*** https://cdn.discordapp.com/attachments/382580600697126924/387651210716381184/akil-isi-degil_780x431-xutiiwgfes.gif','***TAM GİDİYORDUN BRO*** https://cdn.discordapp.com/attachments/382580600697126924/387651169654145034/sansa-yasiyor-olabilir_780x419-7y685y3lhd.gif','***ADRENALİN İLE EVLENMEYİ KABUL EDİYOR MUSUNUZ?*** https://cdn.discordapp.com/attachments/382580600697126924/387651154936463361/yukseklerde-takla-atmak_780x419-l26ip7fl4n.gif' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['cilginlik', 'lanet'],
 permLevel: 0 ,
};

exports.help = {
 name: 'çılgınol',
 description: 'ÇILGINLIK YAPAR',
 usage: 'çılgınol'
};
