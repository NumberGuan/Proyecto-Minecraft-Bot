const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { execute } = require('./ticket');

module.exports = {
name: 'ip',
description: 'comando ip',
    execute(message, args){
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

}