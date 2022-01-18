const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const delay = ms => new Promise(res => setTimeout(res, ms));




module.exports = {
name: 'asd',
aliases: [],
permissions: [],
description: 'asd',

async execute(message, args, command, client, Discord) {

    
    const usuario = message.member;


    
    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);

    channel.setParent('785591896230985830');

    const createEmbed = new MessageEmbed()
    .setTitle(`@<${message.author.tag}> Haz creado un ticket.`)
    .setColor('RANDOM')
    .setDescription(`Revisa ${channel} para mas información. Recuerda tener paciencia ya que puede tomar varios minutos en recibir una respuesta.`)
    .setAuthor((`${message.author.tag}`), message.author.displayAvatarURL({ dynamic: true }))
    .setFooter(`Solicitado por ${message.author.tag}` + message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    
    
    const welcomeEmbed = new MessageEmbed()
    .setAuthor((`Ticket de @${message.author.tag}`), message.author.displayAvatarURL({ dynamic: true }))
    .setColor('RANDOM')
    .setDescription(`Bienvenido ${message.author.tag} al sistema de tickets, recuerda que una vez finalizada tu duda o reporte reacciona a los emojis.`)
    .addFields(
        { name: ' -  🔒  - ', value: 'Ya **no podras** enviar mas mensajes en el ticket pero lo podras ver. Dara a entender a los administradores que tu *problema ha sido solucionado o que lo estas solucionando.*' },
        { name: ' -  ⛔  - ', value: 'Borrara el canal para siempre.'}
        );
    




    
        setTimeout(() => channel.permissionOverwrites.edit(client.guilds.cache.get(message.guild.id).roles.everyone.id  , {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
          }), 2000)

          setTimeout(() => channel.permissionOverwrites.edit(message.author.id, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
          }), 2000)

      

const reactionMessage = await channel.send({embeds: [welcomeEmbed]});





try{
    await reactionMessage.react("🔒");
    await reactionMessage.react("⛔");
}
catch(err){

channel.send("Error en los emojis.")
throw err;
}

const collector = reactionMessage.createReactionCollector((reaction, user) => message.guild.members.cache.find((member =>
     member.id === user.id).hasPermission('ADMINISTRATOR'),
    {dispose: true}
    )); 

    collector.on('collect', (reaction, user) => {
        switch (reaction.emoji.name){
        case"🔒":
        channel.permissionOverwrites.edit(message.author.id, { SEND_MESSAGES: false,
                                                               VIEW_CHANNEL: true, });
            channel.send("Has declarado que tu problema/reporte ha sido solucionado o que lo estas solucionando. *Podras* seguir viendo el canal *pero no podras enviar mensajes.*")
        break;
        
        case "⛔":
            setTimeout(() => 1000);
            setTimeout(() => channel.send("Este canal será borrado en 5 segundos."), 1000);
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });
    


message.channel.send({embeds: [createEmbed]}).then((msg) => {

}  ).catch((err) => {
    throw err;
});


    },
};