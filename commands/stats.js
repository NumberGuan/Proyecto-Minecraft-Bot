const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const mcdata = require('mcdata');

module.exports = {
name: 'stats',
description: 'Stats servidor',
    execute(message, args){
     mcdata.serverStatus('144.217.48.10:25596').then(serverinfo => {
const embedStats = new MessageEmbed()
.setTitle("Estadisticas del servidor de Minecraft")
.setColor('RANDOM')
.addField('Jugadores online:', `${serverinfo.players}/${serverinfo.maxplayers}`, true)
.addField('Ping:', `${serverinfo.ping}ms`, true)   
.addField('Versión:', `${serverinfo.version}`, true)  
.setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
message.channel.send({ embeds: [embedStats]});

const canalEdit = message.guild.channels.cache.find(c => c.id === '897166233277960217');
      canalEdit.setName(`Jugadores online: ${serverinfo.players}/${serverinfo.maxplayers}`)
    
      function refreshData()
      {
          x = 60;  // 5 Seconds
      
          console.log("Actualizando canal de jugadores Online")
          mcdata.serverStatus('144.217.48.10:25596').then(serverinfo => {
      
            const canalEdit = message.guild.channels.cache.find(c => c.id === '897166233277960217');
            canalEdit.edit(`Jugadores online: ${serverinfo.players}/${serverinfo.maxplayers}`)
            console.log("Correctamente actualizado.")
         });
      
          setTimeout(refreshData, x*1000);
      }
      
      
      refreshData(); // execute function


});
        

    }

}