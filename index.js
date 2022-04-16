const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const config = require('./config.json');
const BOT_TOKEN = config.BOT_TOKEN;
let PlayerCount = require('./server/players');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    
    setInterval(() => {
      PlayerCount.getPlayerCount().then((result) => {
          client.user.setActivity(`${result.data.length}/1024 players`,{ type: 'PLAYING' });
      })
    }, 10000);
});

client.login(BOT_TOKEN);
