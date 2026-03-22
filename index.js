process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === '!hello') {
        message.reply('שלום! אני הבוט שלך');
    }

    if (message.content.includes('בוקר טוב') || message.content.includes('בוקר')) {
        message.reply('בוקר מרנין כל נפש חי אשר שורצת על פני האדמה');
    }
});

client.login(process.env.TOKEN);