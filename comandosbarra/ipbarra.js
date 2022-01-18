const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = { 
    data: new SlashCommandBuilder()

    .setName('ip')
    .setDescription('IP y versión del servidor.'),
     // .addStringOption(option => option.setName("contenido").setDescription("El contenido de tu sugerencia.").setRequired(true)),

    async run(client, interaction){
// const sugerenciatexto = interaction.options.getString("texto")


        const embedip = new MessageEmbed()
.setTitle("Información del servidor.")
.setColor('RANDOM')
.addFields(
    { name: 'Versión:', value: ' > *El servidor corre en la versión 1.17.1*'},
    { name: 'IP:', value: ' > *La ip es la suiguiente: 144.217.48.10:25596*'})
.setFooter((`Solicitado por ${interaction.member.user.tag}`), interaction.member.user.displayAvatarURL({ dynamic: true }))
.setTimestamp()

interaction.reply({ embeds: [embedip] })



    }

}