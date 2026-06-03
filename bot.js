const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'play.leztusasmp.xyz',
        port: 25565,
        username: 'Xacrifizee_',
        version: false
    });

    bot.once('spawn', () => {
        console.log('Bot joined!');

        setTimeout(() => {
            bot.chat('/login kurt');
        }, 3000);

        setTimeout(() => {
            bot.chat('/eco');
        }, 6000);

        setInterval(() => {
            bot.setControlState('jump', true);

            setTimeout(() => {
                bot.setControlState('jump', false);
            }, 250);
        }, 1500);
    });

    bot.on('end', () => {
        console.log('Disconnected, reconnecting...');
        setTimeout(createBot, 10000);
    });

    bot.on('kicked', (reason) => {
        console.log('Kicked:', reason);
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => {
        console.log(err);
    });
}

createBot();
