const { Command } = require("gcommands");
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "help",
            description: "Help Command!",
            cooldown: "5s",
            userRequiredPermissions: "ADMINISTRATOR", // Permission, [Permission, Permission]
        });
    }

    run({ client, respond, interaction, message }, args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor('Aspect#3949')
            .setTitle('Aspect-Development')
            .addFields({ name: 'whitelist', value: 'Whitelists an ip!', inline: true }, )
            .setTimestamp()
            .setColor('#00AAFF')
        respond(embed);
    }
}
djs