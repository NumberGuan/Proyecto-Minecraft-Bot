const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = { 
    data: new SlashCommandBuilder()

    .setName('manual')
    .setDescription('Manual del servidor de Minecraft.'),
     // .addStringOption(option => option.setName("contenido").setDescription("El contenido de tu sugerencia.").setRequired(true)),

    async run(client, interaction){
// const sugerenciatexto = interaction.options.getString("texto")


     

const embedpdf = new MessageEmbed()
      .setTitle("Manual de comandos del servidor de Minecraft.")
      .setDescription("Creado por el usuario **JXDgamer27**.")
      .setColor("RANDOM")
      .setTimestamp()

      interaction.reply({ embeds: [embedpdf] })

      const { MessageAttachment } = require("discord.js");
      const pdf = new MessageAttachment('./commands/manual_pm.pdf'); 
      interaction.channel.send({"files": [pdf]});


    }

}