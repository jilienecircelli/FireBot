const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-'

client.once('ready', () => {
    console.log('FireBot is online!');
});

client.login('');
