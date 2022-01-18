const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = { 
    data: new SlashCommandBuilder()

    .setName('pmhelp')
    .setDescription('Mira todos los comandos disponibles.'),
     // .addStringOption(option => option.setName("contenido").setDescription("El contenido de tu sugerencia.").setRequired(true)),

    async run(client, interaction){
// const sugerenciatexto = interaction.options.getString("texto")


const pmhelpEmbed = new MessageEmbed()
.setColor('#f6b26b')
.setTitle('Comandos disponibles para el bot!')
.setURL('https://proyecto-minecraft-webshop.tebex.io/')
.addFields(
    { name: ' <:pregunta:903328991786696745>   /pmhelp', value: 'Utiliza /pmhelp para ver todos los *comandos disponibles.* ||*(Estas viendo /pmhelp ahora mismo)*||'},
    { name: ' <:lightbulb:903329248222265384>  /tips', value: 'Utiliza el comando tip para recibir una *recomendacion breve aleatoria.*'},
    { name: ' <:lupa:903329511238688779>  /stats', value: 'Revisa la cantidad de *jugadores online*, *TPS del servidor*, y mas información.'},
  { name: ' <:documento:903326355192684544>  /sugerencia', value: 'Envia una [sugerencia](https://discord.com/channels/785217094316458005/785598709563785226/877063700891185212) para que los usuarios puedan votar si ser implementada o no.'},
    { name: ' <:boleto:903330036348751904>  -ticket', value: '*Creara un canal privado* para comunicar a los administradores un problema, o reporte de jugador. *Hacer muchos tickets sin sentido tiene consecuencias.*'},
  { name: ' <:tienda:903331178474537001>  /tienda', value: '*[Tienda oficial de Proyecto Minecraft.](https://www.codegrepper.com/code-examples/javascript/+discord.js+hyperlink+in+embed+title)*'},			
  )
.setImage('https://cdn.discordapp.com/attachments/785595699819053077/888863606601572352/1.jpg')
.setFooter(`Creado por NumberGuan#5029.`, 'https://cdn.discordapp.com/avatars/414187935114461184/000436c0f3becac9012dd713bc368808.png?size=1024')
.setThumbnail("https://cdn.discordapp.com/attachments/829469747728351244/903332172977549352/pregunta.png");

interaction.reply({ embeds: [pmhelpEmbed] })



    }

}