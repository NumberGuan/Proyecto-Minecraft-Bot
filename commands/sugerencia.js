const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });




module.exports = {
    name: 'sugerencia',
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'crea una sugerencia',
    execute(message, args, command, client, Discord){
        const channel1 = message.guild.channels.cache.find(c => c.id === '917178518796922890');
        if(!channel1) return message.channel.send('No existe un canal de sugerencias.');

// const channel = message.guild.channels.cache.find(c => c.name === 'sugerencias');

        let messageArgs = args.join(' ');



        const sugerenciaTrue = new MessageEmbed()
        .setTitle("Sugerencia enviada correctamente. Ha sido enviada con los siguientes argumentos.")
        .setDescription(" > " + messageArgs)
        .setTimestamp()

        const nomention = new MessageEmbed()
        .setTitle(" <:AtSign:893931033882411078> - Esta sugerencia está vacía.")
        .setDescription("Asegurate de utilizar el comando correctamente. || -sugerencia (texto) ||")
        .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        if (!messageArgs[0]) return message.channel.send({embeds: [nomention]})

        

        const anashe = new MessageEmbed()
        .setColor('FADF2E')
        .setAuthor((`${message.author.tag} sugirió lo siguiente: `), message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(" > " + messageArgs)
        .setThumbnail('https://cdn.discordapp.com/attachments/829469747728351244/903327812457480233/sugerencias.png')
        .setTimestamp();
        
       
        if(messageArgs){
            message.channel.sendTyping()
            message.channel.send({embeds: [sugerenciaTrue]})


            
            channel1.send({embeds: [anashe]}).then((message) =>{

            message.react('<:aprobado:903327088436727828>');
            message.react('<:rechazado:903327085089665065>');


            


     

            }
            
        ).catch((err)=>{
            throw err;
        });
    }
}}