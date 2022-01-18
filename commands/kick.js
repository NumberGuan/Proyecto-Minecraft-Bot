const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const delay = ms => new Promise(res => setTimeout(res, ms));


module.exports = {
  name: 'kick',
  description: "Este comando kickea a un usuario.",
  async execute(message, args){
      const target = message.mentions.users.first();

      const nomention = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(` <:AtSign:893931033882411078> - No has mencionado a ningun usuario válido.`)
      .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
      






      let reason = args.slice(1).join(" ");

      if(!reason) reason = "No se ha dado una razón.";

      if(message.member.permissions.has("KICK_MEMBERS", "ADMINISTRATOR")){

        if (!args[0]) return message.channel.send({embeds: [nomention]})
        
          const memberTarget = message.guild.members.cache.get(target.id);

          const created = target.createdAt

          const kickembed = new Discord.MessageEmbed()
          .setColor("#a3e116")
          .setTitle(`<:aprobado:903327088436727828> - @${target.tag} ha sido kickeado correctamente.`)
          .setFooter(`Asegurate de leer las reglas para no terminar como ${target.tag}`)
          .setThumbnail("https://cdn.discordapp.com/emojis/807823548172337163.gif?v=1")
          .addFields(
            { name: '`Cuenta creada en:`', value: `${created}`, inline: true },
            { name: '`ID de la cuenta:`', value: `${target.id}`, inline: true },
            { name: '`Razón:`', value: `Razón: ${reason}`, inline: true },
          )
        
        if (target){ 
          message.channel.send({embeds: [kickembed]})
          target.send({embeds: [kickembed]})
          await delay(2000);
         //  memberTarget.kick();
          
        }
        if (!target) return message.channel.send({embeds: [nomention]})

         

        
         
          

          

          

          
      } 
      if(!message.member.permissions.has("KICK_MEMBERS", "ADMINISTRATOR")){
          const nokickembed = new Discord.MessageEmbed()
          .setColor("#ff1100")
          .setTitle(` ❌ - *Buen intento*, no tienes permisos para kickear a otros usuarios.`)
          .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
          
          const embedEmbedSent = message.channel.send({embeds: [nokickembed]})
          
         

         
      }
      
  }
}