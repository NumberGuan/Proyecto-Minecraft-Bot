const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const mcdata = require('mcdata');

module.exports = { 
    data: new SlashCommandBuilder()

    .setName('stats')
    .setDescription('Información del servidor.'),
     // .addStringOption(option => option.setName("contenido").setDescription("El contenido de tu sugerencia.").setRequired(true)),

    async run(client, interaction){
// const sugerenciatexto = interaction.options.getString("texto")

mcdata.serverStatus('144.217.48.10:25596').then(serverinfo => {
    const embedStats = new MessageEmbed()
    .setTitle("Estadisticas del servidor de Minecraft")
    .setColor('RANDOM')
    .addField('Jugadores online:', `${serverinfo.players}/${serverinfo.maxplayers}`, true)
    .addField('Ping:', `${serverinfo.ping}ms`, true)   
    .addField('Versión:', `${serverinfo.version}`, true)  
    .setFooter(`Solicitado por ${interaction.member.user.tag}`, interaction.member.displayAvatarURL({ dynamic: true }));
    interaction.reply({ embeds: [embedStats] })
});




    }}

