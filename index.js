module.exports = {
    init: function(controller, bot, expressApp) {
        // build your bot logic here! 
        controller.hears('hello', 'direct_mention', function(bot, message) {
            bot.reply(message, 'I am a package!');
        });
    }
};
