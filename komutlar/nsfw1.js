const Discord = require('discord.js') 
exports.run = (client, msg, args) => {
  if(msg.channel.nsfw || msg.channel.type ==='dm'){
      let embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setImage(("https://cdn.boobbot.us/Gifs/gif"+ Math.floor(Math.random() * 1006)+".gif"))
    msg.channel.send(embed)
}
  else{
        msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign:Bu kanal NSFW(Not Safe For Work) kanalı değil! Ayarlardan bunu açabilirsin! DİKKAT +18 GÖRÜNTÜLER İÇERİR!'),
 }})
  }
 }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['cinsel', '+18', 'nsfw'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'gif',
    description: '+18 Gifler Atar',
    usage: 'gif'
  };