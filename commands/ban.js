const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const delay = ms => new Promise(res => setTimeout(res, ms));
const moment = require('moment');


module.exports = {
    name: 'ban',
    description: "Este comando banea a un usuario.",
    async execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.permissions.has("BAN_MEMBERS", "ADMINISTRATOR")){

            const nomention = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(` <:AtSign:893931033882411078>  -  No has mencionado a ningun usuario válido.`)
            .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

            let reason = args.slice(1).join(" ");
            

            if(!reason) reason = "No se ha dado una razón.";

            if (!target) return message.channel.send({embeds: [nomention]})

            if (!args[0]) return message.channel.send({embeds: [nomention]})
          
            const memberTarget = message.guild.members.cache.get(target.id);
            
            const created = target.createdAt
            

            const banembed = new Discord.MessageEmbed()
            .setColor("#a3e116")
            .setTitle(`<:aprobado:903327088436727828> - @${target.tag} ha sido baneado correctamente.`)
            .setFooter(`Asegurate de leer las reglas para no terminar como ${target.tag}`)
            .setThumbnail("https://cdn.discordapp.com/emojis/807823548172337163.gif?v=1")
            .addFields(
              { name: '`Cuenta creada en:`', value: `${created}`, inline: true },
              { name: '`ID de la cuenta:`', value: `${target.id}`, inline: true },
              { name: '`Razón:`', value: `Razón: ${reason}`, inline: true },
            )
            // `Razón: ${reason}`

            if (target){
              target.send({embeds: [banembed]})
               const sent = message.channel.send({embeds: [banembed]})
              await delay(2000);
             //  memberTarget.ban({ reason: `${reason}` })
           // .format("DD/MM/YYYY LTS")
              // (member.joinedAt).format("DD, MMM Do YYYY");
              }
            }

            if (!message.member.permissions.has("BAN_MEMBERS", "ADMINISTRATOR")){
            
              const nobanembed = new Discord.MessageEmbed()
              .setColor("#ff1100")
              .setTitle(` ❌ - *Buen intento*, no tienes permisos para banear a otros usuarios.`)
              .setFooter(`Solicitado por ${message.author.tag}`);
  
            
              message.channel.send({embeds: [nobanembed]})
            }


        

          
         

            //<:You_Tried:893920394652840046>
       
        
          
        }}