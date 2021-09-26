const { Command } = require("gcommands");
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "whitelist",
            description: "IP",
            cooldown: "5s",
            userRequiredPermissions: "ADMINISTRATOR", // Permission, [Permission, Permission]
        });
    }

    run({ client, respond, interaction, message }, args) {
            //  let roleid = '876932654887501845';
            //if (message.member.roles.cache.has(roleid)) {

            const { createConnection } = require('mysql')

            let note = args.join(' ').split('|')[1];
            let anticheat = args.join(' ').split('|')[2];
            const mysql = require('mysql');
            var con = mysql.createConnection({
                host: "127.0.0.1",
                user: "root",
                database: "servers"
            });

            let messaeg1 = args[0];

            let error = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Aspect-Development')
                .setAuthor('Aspect#3949')
                .setDescription("**Authentication Failure:\n\nReason: Invalid Usage.\n\nCorrect Usage:**" + `\`\`\`/whitelist [ip] [1/0] [notes]\`\`\``)
                .setTimestamp()
                .setColor('#00AAFF')

            if (!args[0]) return message.channel.send(error)


            const embed = new MessageEmbed()

            .setColor('#0099ff')
                .setTitle('Aspect-Development')
                .setAuthor('Aspect#3949')
                .setFooter('Script Authenticated')
                .setTimestamp()
                .setColor('#00AAFF')
                .addFields({
                    name: '**IP:**',
                    value: `${ messaeg1 }`
                }, {
                    name: "Auth System",
                    value: `Online!`
                }, {
                    name: "Whitelisted",
                    value: `By ${ message.author.tag }`
                })


            respond(embed);


            var sql = `INSERT INTO server_licensing(ip, anticheat, notes) VALUES('::ffff:${messaeg1}', '${anticheat}', '${note}')`;

            con.query(sql, function(err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });


        }
        // }
}