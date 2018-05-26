const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(' ⚠ Hata! ⚠ ', '`reboot` adlı komutu özel mesajlarda kullanamazsın. 😠 ')
  return message.author.sendEmbed(ozelmesajuyari); }
  message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bot yeniden Başlatılsın mı?')).then(message => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendEmbed(new Discord.RichEmbed().setDescription('**Bot** az önce yeniden başlatıldı. ')).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Yeniden başlatma işlemi **iptal** edildi.'));
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'rb',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
