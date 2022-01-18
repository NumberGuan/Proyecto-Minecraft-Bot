const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { execute } = require('./ticket');
const intents = new Discord.Intents(14023);
const client = new Discord.Client({ intents });

module.exports = {
name: 'usuarios',
description: 'usuarios',
    execute(message, args){
console.log("funciono asd")
     
      function refreshData()
      {
          x = 20;  // 5 Segundos
      
          const usuariosOnline = ((message.guild.members.fetch())).filter(member => !member.user.bot).size;
     const channel1 = message.guild.channels.cache.find(c => c.id === '930976969410105414');
     channel1.setName(`👥│Usuarios: ${usuariosOnline}`)
         console.log("hola si")
      
          setTimeout(refreshData, x*1000);
      }
      
      refreshData(); // Ejecutar
      
    
    }

}