const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const delay = ms => new Promise(res => setTimeout(res, ms));
const intents = new Discord.Intents(14023);
const client = new Discord.Client({ intents });
const fs = require('fs');

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
       const args = message.content.slice(prefix.length).split(/ +/);
       const command = args.shift().toLowerCase();
       const fs = require('fs');
})





module.exports = {
    name: 'crafteos',
    description: 'muestra los crafteos',

async execute(message, args){

    const welcomeEmbed = new MessageEmbed()
.setTitle("Menu de crafteos.")
.setDescription("Bienvenido al *menu de crafteos*, reacciona a los emojis dependiendo de que crafteos quieres ver.")
.setColor("RANDOM")
.setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
.addFields(
   { name: '『 🛡 』', value: ' > *Protecciones*'},
   { name: '『 🛠 』', value: ' > *Herramientas*'},
   { name: '『 📖 』', value: ' > *Items variados.*'})
   .setThumbnail("https://cdn.discordapp.com/attachments/880578378611163207/904047904862375946/3084_MCcraftingtable.png")





   const menuInicial = await message.channel.send({embeds: [welcomeEmbed]});

   try {
    await menuInicial.react("🛡");
    await menuInicial.react("🛠");
    await menuInicial.react("📖"); 
}
catch (err) {

    channel.send("Error en los emojis.")
    throw err;
}
   
// .then(message => {message.react('🛡'), message.react('🛠'), message.react('📖');})

const collector = menuInicial.createReactionCollector(
    (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("SEND_MESSAGES"));

collector.on('collect', async(reaction, user) => {
        switch (reaction.emoji.name) {
            case "🛡":
                

                const protecciones = new MessageEmbed()
                .setTitle("Menu de protecciones:")
                .setColor("RANDOM")
                .addFields(
               { name: '『 ⚫ 』',  value: " > Protección de carbón."},
               { name: '『 🟤 』', value: ' > Protección de hierro.'},
               { name: '『 🔵 』', value: ' > Protección de lapizlazuli.'},
               { name: '『 🔴 』', value: ' > Protección de redstone.'},
               { name: '『 🟡 』', value: ' > Protección de oro.'}
              )
                .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

                menuInicial.delete();
   // var enviado = await message.channel.send({embeds: [protecciones]});

    const enviado = await message.channel.send({embeds: [protecciones]})
    


    try {
    enviado.react("⚫")
    enviado.react("🟤")
    enviado.react("🔵")
    enviado.react("🔴")
    enviado.react("🟡")
    }
    catch (err) {
    
        message.channel.send("Error en los emojis.");
        throw err;
    }


               // const protec = await message.channel.send({embeds: [protecciones]});


    //            try {
        //            await protec.react("⚫");
         //           await protec.react("🟤");
          //          await protec.react("🔵");
        //            await protec.react("🔴");
         //           await protec.react("🟡");
        //        }
        //        catch (err) {
         //       
         //           channel.send("Error en los emojis.")
           //         throw err;
            //    }

                //     const collectorprot = protec.createReactionCollector(
             //       (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("SEND_MESSAGES"));
                

            
                    break;

                    case"⚫":
                    message.channel.send("a")
                break;
        }})
        
        
   


try {
    
}
catch (err) {

    message.channel.send("Error en los emojis.");
    throw err;
}



    




    

        

   
  
    }}


 