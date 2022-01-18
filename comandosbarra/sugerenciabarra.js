const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = { 
    data: new SlashCommandBuilder()

    .setName('sugerencia')
    .setDescription('Realiza una sugerencia para mejorar el servidor.')
    .addStringOption(option => option.setName("contenido").setDescription("El contenido de tu sugerencia.").setRequired(true)),
   

    async run(client, interaction){
const contenido = interaction.options.getString('contenido')
const channel1 = interaction.guild.channels.cache.find(c => c.id === '918193346055393291');

   
// .setFooter((`Solicitado por ${interaction.member.user.tag}`), interaction.member.user.displayAvatarURL({ dynamic: true }))

const sugerenciaTrue = new MessageEmbed()
.setTitle("Sugerencia enviada correctamente. Ha sido enviada con los siguientes argumentos.")
.setDescription(" > " + contenido)
.setTimestamp();

const anashe = new MessageEmbed()
.setColor('FADF2E')
.setAuthor((`${interaction.member.user.tag} sugirió lo siguiente: `), interaction.member.user.displayAvatarURL({ dynamic: true }))
.setDescription(" > " + contenido)
.setThumbnail('https://cdn.discordapp.com/attachments/829469747728351244/903327812457480233/sugerencias.png')
.setTimestamp();

interaction.reply({ embeds: [sugerenciaTrue] });

channel1.send({embeds: [anashe]}).then((message) =>{

    message.react('<:aprobado:903327088436727828>');
    message.react('<:rechazado:903327085089665065>');
}



)

    }

}