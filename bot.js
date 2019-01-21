const Discord = require("discord.js");

const client = new Discord.Client();
const token = '';
const cmdchar = '';

client.on("ready", () => {
    console.log("Ready");
});

client.on("message", msg => {
    console.log(msg.cleanContent);
});

client.login(token);