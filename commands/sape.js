const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const delay = ms => new Promise(res => setTimeout(res, ms));








module.exports = {
    name: 'sape',
    description: "muestra los crafteos",
    async execute(message, args){


 const welcomeEmbed = new MessageEmbed()
 .setTitle("Menu de crafteos.")
 .setDescription("*Reacciona a los emojis abajo para ver los distintos crafteos*")
 .setColor("RANDOM")
 .setImage('https://cdn.discordapp.com/attachments/829469747728351244/894638409191157792/Captura_de_pantalla_2021-10-04_143247.png')
 .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));


        const reactionMessage = message.channel.send({embeds: [welcomeEmbed]});

reactionMessage.send()


try{
    await reactionMessage.react("<:redstone_mc:894639594107179088>");
    await reactionMessage.react("⛔");
}
catch(err){

message.channel.send("Error en los emojis.")
throw err;
}

const collector = reactionMessage.createReactionCollector((reaction, user) => message.guild.members.cache.find((member =>
     member.id === user.id).hasPermission('ADMINISTRATOR'),
    {dispose: true}
    )); 

    collector.on('collect', (reaction, user) => {
        switch (reaction.emoji.name){
        case"<:redstone_mc:894639594107179088>":
        
                                      
            message.channel.send("Has declarado que tu problema/reporte ha sido solucionado o que lo estas solucionando. *Podras* seguir viendo el canal *pero no podras enviar mensajes.*")
        break;
        
        case "⛔":
            message.channel.send("Prueba")
            break;
        }
      });
    }}
