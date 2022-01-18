const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");



module.exports = { 
    data: new SlashCommandBuilder()




    .setName('protecciones')
    .setDescription('Crafteos de las protecciones del servidor.')
     // .addStringOption(option => option.setName("contenido").setDescription("El contenido de tu sugerencia.").setRequired(true)),
     .addStringOption(option =>
		option.setName('tipos').setDescription('Tipos de protecciones.')
		.setRequired(true)
     .addChoice('Carbon', 'carbon')
     .addChoice('Hierro', 'hierro')
     .addChoice('Lapizlazuli', 'lapizlazuli')
     .addChoice('Redstone', 'redstone')
     .addChoice('Oro', 'oro')),






    async run(client, interaction){



const cmd = interaction.options.getString("tipos");

switch(cmd){
case "carbon":{

interaction.reply("carbon funciono")
      break;  
    }
        
case "hierro": {
    interaction.reply("Hierro funciono")
} break;

case "lapizlazuli": {
    interaction.reply("Lapiz funciono")
} break;

case "redstone": {
    interaction.reply("Redstone funciono")
} break;

case "oro": {
    interaction.reply("Oro funciono")
} break;

    }
}

}