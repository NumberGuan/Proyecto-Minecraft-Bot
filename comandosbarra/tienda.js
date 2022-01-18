const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = { 
    data: new SlashCommandBuilder()

    .setName('tienda')
    .setDescription('Tienda oficial del servidor.'),
     // .addStringOption(option => option.setName("contenido").setDescription("El contenido de tu sugerencia.").setRequired(true)),

    async run(client, interaction){
// const sugerenciatexto = interaction.options.getString("texto")


const tiendaembed = new MessageEmbed()
.setTitle("Clickea aquí para ir a la tienda oficial de Proyecto Minecraft")
.setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
.setURL("https://proyecto-minecraft-webshop.tebex.io/")
.setThumbnail("https://cdn.discordapp.com/attachments/829469747728351244/903333341804240966/tienda.png")


interaction.reply({ embeds: [tiendaembed] })



    }

}