exports.run = async function (client, message) {
  let rolls = Math.floor(Math.random() * 100)
  message.channel.send(rolls)
  message.react('💯')
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rasgelesayı', 'rsat'],
    permLevel: 0

  };

  exports.help = {
    name: 'rsat',
    description: 'Rasgele sayı çeker.',
    usage: 'rsat'
  };
