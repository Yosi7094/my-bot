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
    console.log(`הבוט פעיל! מחובר בתור ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    console.log(`הודעה התקבלה: ${message.content}`);

    if (message.content === '!hello') {
        message.reply('שלום! אני הבוט שלך 👋');
    }

    if (message.content.includes('בוקר טוב') || message.content.includes('בוקר')) {
        message.reply('בוקר מרנין כל נפש חי אשר שורצת על פני האדמה ☀️');
    }
});

client.login(process.env.TOKEN);
```

שמור עם **Ctrl+S**

---

**שלב 2 — צור קובץ `.env` בתיקייה `my-bot`:**

פתח Notepad++ וצור קובץ חדש, שמור אותו בשם `.env` עם התוכן:
```
TOKEN=הטוקן_שלך_פה
```

---

**שלב 3 — צור קובץ `.gitignore`:**

צור קובץ חדש בשם `.gitignore` עם התוכן:
```
.env
node_modules