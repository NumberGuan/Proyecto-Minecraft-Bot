const discord = require('discord.js');
const fs = require('fs');
require('dotenv').config()
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { clientId, guildID } = require('./config.json')
const commands = []

const slashcommandsFiles = fs.readdirSync('./comandosbarra').filter(file => file.endsWith('js'));


for(const file of slashcommandsFiles){
    const slash = require(`./comandosbarra/${file}`)
    commands.push(slash.data.toJSON())
}

const rest = new REST({ version: "9"}).setToken('token-de-tu-bot-aqui')

createSlash()

async function createSlash(){
    try{
        await rest.put(
            Routes.applicationCommands(clientId), {
                body: commands
            }
        )
        console.log("Slash command agregados")
    } catch(e) {
        console.log(e)
    }
}
///////
