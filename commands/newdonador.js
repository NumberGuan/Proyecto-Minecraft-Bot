const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const delay = ms => new Promise(res => setTimeout(res, ms));


module.exports = {
  name: 'newdonador',
  description: "Nuevo donador, agradecerá",
  async execute(message, args){
    if(message.member.permissions.has("ADMINISTRATOR")){
        const channel1 = message.guild.channels.cache.find(c => c.id === '829469747728351244');

        const donador = args.slice(1).join(" ");

        
        const agradecimiento = new Discord.MessageEmbed()
          .setColor("#EBD2DB")
          .setTitle(` <:MC_Heart_Full:877308144349495306> Nuevo donador  <:MC_Heart_Full:877308144349495306> `)
          .setDescription(`Gracias ${donador} por adquirir el vip **ALPHA** y confiar en **PROYECTO MINECRAFT**. Disfrútalo.`)
          .setFooter(`Si quieres apoyar a PM como hizo ${donador} usa el comando -tienda`, 'https://cdn.discordapp.com/avatars/414187935114461184/14d57efa5ee869f9f71c861a22f20128.png?size=256')
          .setURL("https://proyecto-minecraft-webshop.tebex.io/")
          .setThumbnail('https://cdn.discordapp.com/attachments/829469747728351244/903324942089728100/crecimiento.png')
          channel1.send({embeds: [agradecimiento]})
    }
    

         
      }
  
}