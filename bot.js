const Discord = require('discord.js');
const intents = new Discord.Intents(14023);
const client = new Discord.Client({ intents });
const { MessageEmbed } = require('discord.js');
const mcdata = require("mcdata");
client.commands = new Discord.Collection();
const fs = require('fs');
const prefix = '-'



/// Nuevo usuario entró al servidor.
client.on('guildMemberAdd', member => {
   console.log("Nuevo usuario ingresó al servidor:" + member.user.tag)

var bienvenidas = [
   `Bienvenido al servidor ${member.user.toString()} <a:cutelook:919650335319027834>`,
   `Bienvenido ${member.user.toString()}, asegurate de leer #『📖』normas.`,
   `Ostia chaval que se ha unido ${member.user.toString()} :flushed: Bienvenido bro`,
   `Hola ${member.user.toString()}, lee las reglas y disfruta del servidor!`,
   `Hola ${member.user.toString()}, bienvenido a la comunidad!`,
   `Bienvenido ${member.user.toString()} <a:chau:904796470471979019>`,
   `Bienvenido a Proyecto Minecraft ${member.user.toString()}!`,
   `Bienvenido ${member.user.toString()} :face_with_monocle:`,
   `Llego ${member.user.toString()} :partying_face:`,
   `Me quede sin respuestas aleatorias :sob:, Bienvenido ${member.user.toString()} :star_struck:`,
   `Welcome ${member.user.toString()} my friend!`,
   `Eres el verdadero? ${member.user.toString()}? OMG Bienvenido :cold_face:`,
   `Spawneo magicamente ${member.user.toString()}, denle la bienvenida :partying_face:`,
   `SIIII LLEGO ${member.user.toString()}:partying_face:`,
   `Me alegra que estes aquí ${member.user.toString()} bienvenido :wink:`,
   `Bienvenido a Proyecto Minecraft ${member.user.toString()}, espero que disfrutes!`
]
let randomAnswer = Math.floor(Math.random() * bienvenidas.length)
const channel = member.guild.channels.cache.find(c => c.id === '876546796745289778');
   channel.send(bienvenidas[randomAnswer]); 

});


/// Cargador de SlashCommmands
client.slashcommands = new Discord.Collection()
const slashcommandsFiles = fs.readdirSync("./comandosbarra").filter(file => file.endsWith('js'))

for(const file of slashcommandsFiles){
const slash = require(`./comandosbarra/${file}`)
console.log(`Comandos de barra cargados ${file}`)
client.slashcommands.set(slash.data.name, slash)
}

client.on("interactionCreate", async(interaction) => {
   if(!interaction.isCommand()) return;

    const slashcmds = client.slashcommands.get(interaction.commandName)

   if(!slashcmds) return;

   try{
      await slashcmds.run(client, interaction)
   } catch(e) {
      console.log(e)
   }
})


//// Cargador de comandos normales
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
   for(const file of commandFiles){
       const command = require(`./commands/${file}`);
 
       client.commands.set(command.name, command);
   }
  
   


/// Evento de Inicio
client.once("ready", () => {
      console.log(`Encendido y funcionando correctamente :D`);

      
      let myGuild = client.guilds.cache.get("785217094316458005");
      let usuariosOnline1= myGuild.memberCount;

         var presencias = [ "Bienvenido a Proyecto Minecraft!  Utiliza /pmhelp para ver comandos disponibles!",
            "Minecraft 1.18.1",
            "Conectate a Proyecto Minecraft utilizando la IP: 144.217.48.10:25596!",
            "Proyecto Minecraft 1.18.1!",
            "¿Que esperas para jugar? :D",
            "¿Eres nuevo en el servidor? Te recomiendo utilizar /manual",
           `Ya somos ${usuariosOnline1} usuarios en Proyecto Minecraft!`,
            `¿Tienes un problema? Consulta con la comunidad en #soporte-publico!`,
            `¿No tienes nadie para jugar? Pregunta en #general si alguien quiere jugar contigo :)`,
            `Tengo varios comandos... Utiliza /pmhelp para verlos!`,
         ]  
         // Estado random cada 20 segundos
setInterval(() => {
   let estadoRandom = Math.floor(Math.random() * presencias.length)
client.user.setActivity(presencias[estadoRandom]);
     }     , 20000)

     
});



// Registro de DMs en el bot
client.on('message', async message => {

   if(message.channel.type === "DM"){
      const EmbedPrueba = new MessageEmbed()
      .setTitle("Nuevo DM registrado en el Bot.")
      .setDescription(`**Contenido:** ${message.content}`)
      .setFooter(`Enviado por el usuario: ${message.author.tag}`)

      const CanalDM = client.channels.cache.get("917178518796922890")
      CanalDM.send({ embeds: [EmbedPrueba]})
   }


// Cargador comandos normales

if(!message.content.startsWith(prefix) || message.author.bot) return;
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();
  
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
   for(const file of commandFiles){
       const command = require(`./commands/${file}`);
 
       client.commands.set(command.name, command);
   
   }
  // Comandos Normales 
   if(command === '123'){
      message.channel.send('https://cdn.discordapp.com/emojis/807823548172337163.gif?v=1');
      console.log(`Utilizaron Hola, enviando GIF`)
      message.delete();
   }

   else if(command === 'usuarios'){

     async function refreshData()
      {
          x = 300;  // 5 Segundos
      
         const usuariosOnline = (await (message.guild.members.fetch())).filter(member => !member.user.bot).size;
         const channel1 = message.guild.channels.cache.find(c => c.id === '930976969410105414');
         channel1.setName(`👥│Usuarios: ${usuariosOnline}`)
         console.log(`Actualizado correctamente canal de usuarios. ${usuariosOnline}`)
       setTimeout(refreshData, x*1000);
      }
      
      refreshData(); // Ejecutar
   }

   else if (command === 'ip'){
      client.commands.get('ip').execute(message, args);
      message.delete();
   }

   if (message.content === '!ip') {
      const embedip = new MessageEmbed()
        .setTitle("Información del servidor.")
        .setColor('RANDOM')
        .addFields(
            { name: 'Versión:', value: ' > *El servidor corre en la versión 1.17.1*'},
            { name: 'IP:', value: ' > *La ip es la suiguiente: 144.217.48.10:25596*'})
        .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.channel.send({embeds: [embedip]})
    }
   else if (command === 'newdonador'){

client.commands.get('newdonador').execute(message, args);

   }
   else if(command === 'stats'){
      client.commands.get('stats').execute(message, args);
   }
})



 // Aqui abajo colocas el token.
 client.login("tu-token-va-aqui");
