const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.channel.send('**ÖLÇÜLÜYOR...**').then(message => {
      var cumleler= ['1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', 'MAXIMUM!'];
      var cumle2 = cumleler[Math.floor(Math.random() * cumleler.length)];
            message.edit(`Senin aletin **${cumle2}** cm :middle_finger:`);
    });
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sosis", "sosisli"],
    permLevel: 0
  };

  exports.help = {
    name: 'aletim',
    description: 'sosislim',
    usage: '/aletim'
  };
