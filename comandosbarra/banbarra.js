const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const delay = ms => new Promise(res => setTimeout(res, ms));
const moment = require('moment');



module.exports = { 
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Banea a los usuarios. Solo adminsitradores.')
    .addUserOption(option => option.setName('usuario').setDescription('usuario a banear').setRequired(true))


.addStringOption(option => option.setName('razon').setDescription('La razón del baneo')),


    async run(client, interaction){

        const channel1 = interaction.guild.channels.cache.find(c => c.id === '918210306046591027');
        const razon1 = interaction.options.getString('razon')
        const usuario = interaction.options.getMember('usuario')
        const usuario1 = interaction.options.getUser('usuario')

        const created = moment(usuario1.createdAt).format(' > DD / MM / YYYY');
     const seUnio = moment(usuario.joinedAt).format(' > DD / MM / YYYY');




        if(interaction.member.permissions.has("BAN_MEMBERS", "ADMINISTRATOR")){

            const banembed = new Discord.MessageEmbed()
            .setColor("#a3e116")
            .setTitle(`<:aprobado:903327088436727828> - @${usuario1.tag} ha sido baneado correctamente.`)
            .setFooter(`Asegurate de leer las reglas para no terminar como ${usuario1.tag}`)
            .setThumbnail(usuario1.avatarURL())
            .addFields(
                // ${interaction.member.user.tag}
              { name: '`Cuenta creada en:`', value: `${created}`, inline: true },
              { name: '`ID de la cuenta:`', value: ` > ${usuario1.id}`, inline: true },
              { name: '`Se unió:`', value: `${seUnio}`, inline: true },
              { name: '`Razón:`', value: ` > ${razon1}`, inline: true },
            )
            //    const seUnio = moment(usuario.joinedAt).format(' > DD / MM / YYYY');
//    .addField('Joined Server:', usuario.joinedAt)
        

            try {    
                usuario.send({embeds: [banembed]})
                interaction.reply({embeds: [banembed]})
                channel1.send({embeds: [banembed]})
                usuario.ban({days:7, reason: `${razon1}` })
         
            }
            catch(err){
                console.log("Intente banear a alguien pero falló")
                throw err;
            }
        }

            if(!interaction.member.permissions.has("BAN_MEMBERS", "ADMINISTRATOR")){

              

                
                const nobanembed = new Discord.MessageEmbed()
                .setColor("#ff1100")
                .setTitle(` ❌ - Buen intento, no tienes permisos para banear a otros usuarios.`)
                .setFooter(`Solicitado por ${interaction.member.user.tag}`);

                interaction.reply({embeds: [nobanembed], ephemeral: true});
                
            }
            

        }


   
    

}