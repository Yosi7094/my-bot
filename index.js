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
        message.reply('\u05e9\u05dc\u05d5\u05dd! \u05d0\u05e0\u05d9 \u05d4\u05d1\u05d5\u05d8 \u05e9\u05dc\u05da \u{1F44B}');
    }

    if (message.content.includes('\u05d1\u05d5\u05e7\u05e8 \u05d8\u05d5\u05d1') || message.content.includes('\u05d1\u05d5\u05e7\u05e8')) {
        message.reply('\u05d1\u05d5\u05e7\u05e8 \u05de\u05e8\u05e0\u05d9\u05df \u05db\u05dc \u05e0\u05e4\u05e9 \u05d7\u05d9 \u05d0\u05e9\u05e8 \u05e9\u05d5\u05e8\u05e6\u05ea \u05e2\u05dc \u05e4\u05e0\u05d9 \u05d4\u05d0\u05d3\u05de\u05d4 \u2600\uFE0F');
    }
});

client.login(process.env.TOKEN);