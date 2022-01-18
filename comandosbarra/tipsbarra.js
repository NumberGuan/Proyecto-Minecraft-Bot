const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = { 
    data: new SlashCommandBuilder()

    .setName('tips')
    .setDescription('Tips aleatorios del servidor.'),
     // .addStringOption(option => option.setName("contenido").setDescription("El contenido de tu sugerencia.").setRequired(true)),

    async run(client, interaction){
// const sugerenciatexto = interaction.options.getString("texto")


     
var names = [
    "Completa tu pase de batalla y consigue recompensas únicas con/bp.",
    "Crea tu propio warp o visita los de la comunidad con/pw ó /pwarp.",
    "Subasta lo que ya no necesites, ó consigue una nueva fuente de ingresos con/ah.",
    "Después de prolongadas sesiones de juego, toma un descanso e hidratate.",
    "Ante cualquier inquietud, duda o problema no olvides usar /helpme y contarnos tu caso. Conoce el staff activo con /staff.",
    "¿Por que no inviertes en algúnacriptomoneda? Compralas con /btc, /eth ó /usdt.", 
    "La unión hace la fuerza, compruebalo ahora mismo con /clan.",
    " Ve por minerales puros y fragmentos en el mundo recursos.",
    "Gracias por confiar tus horas de juego en nosotros, día a día trabajamos para hacer Proyecto Minecraft mucho mejor. ",
    "Mejora picos especiales y piedras de protección con minerales puros.",
    "No pierdas de vista el valor de tus inversiones, revisa su fluctuación en: https://crypto.com/price. ",         
    "Completa tu pase de batalla y consigue recompensas únicas con /bp.",
    "Si deseas responder un mensaje privado emplea el comando/r (Respuesta), de este modo responderas al último usuario que te halla enviado un mensaje. ",
    "Puedes usar la mesa de crafteo sin tener que ponerla en el suelo, solo da click izquierdo con la mesa en la mano.",
    "Gestiona elprogreso de tus habilidades con el comando /skills.",
    "Utiliza tu shulker sin la necesidad de ponerla dando click derecho en esta dentro de tu inventario o cofre. Abrirla en el aire es un beneficio/vip. ",
    "Protege areas en el mundo Survival con las piedras de protección y en el mundo Conquista comprando terrenos (chunks) con /land shop y luego reclamandolos con /land claim.",
    "En el caso de requerir soporte acude a un miembro del staff dentro del servidor, de no haber disponibilidad acude a nuestro servidor de Discord en los canales: #soporte-publico.",
    "Accede a beneficios como: Ingreso al servidor de Minecraft Técnico, tiempo de tp instantaneo, plazas premium en mercados, más homes, más protecciones, más warps entre muchos otros mas con el comando /vip.",
    "Para ver información relevante de una piedra de protección emplea el comando /infops y para ver información de una plaza del mercado utiliza el comando /inforent.",
    "Puedes poner una tienda presionando click izquierdo hacia un cofre. La creación de la tienda sera automática y gratuita. ",
    "Si deseas comprar/vender un item con la mayor brevedad posible, emplea el comando /finditem (TO-BUY/TO-SELL) nombre_item.",
    "Para conquistar terrenos en /warp conquista primero debes comprar las tierras en /land shop para después reclamarlas con /land claim.",
    "Cambia tu skin con los comandos /skin set (nombre_skin) ó /skins.",
    "Si estas teniendo una mala pasada con el rendimiento, recomendamos que instales Optifine mediante el siguiente link: https://optifine.net/downloads."
  ]
  
  
  
    
      let randomAnswer = Math.floor(Math.random() * names.length)

      const embedtip1 = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Aqui tienes un tip random.')
      .setDescription(names[randomAnswer])
      .setFooter((`Solicitado por ${interaction.member.user.tag}`), interaction.member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/829469747728351244/903334953851432960/light-bulb.png")
    
    



      interaction.reply({ embeds: [embedtip1] })

 

    }

}