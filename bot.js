console.log('Bleep Bloop');
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('<3');
}

const replies = [
    'u keep it 100 with me nigga',
    'you da real G',

]

client.on('message', RockPaperScissors);

const rps = ['rock', 
    'paper', 
    'scissors'
]

function RockPaperScissors(msg) {
  if (rps.includes(msg.content)) {
    const botRps = rps[Math.floor((Math.random() * rps.length))];
    msg.reply(`You chose: ${msg}. I chose: ${botRps}`);  
  }
}

client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    if(msg.content === '92+8'){
        const index = Math.floor(Math.random() * replies.length);
        msg.reply(replies[index]);
    }
    else if(msg.content.includes('nonce')){
        msg.channel.send('Did you mean <@',process.env.TOM_C,'>?')
    }
    else if(msg.content.includes('fat')){
        msg.channel.send('Did you mean <@',process.env.AARON_GURN,'>?')
    }
    else if(msg.content.includes('lol')){
        msg.channel.send('We are just having fun and its not illegal!')
    }
}