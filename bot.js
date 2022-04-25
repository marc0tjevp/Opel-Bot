const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Commands
const cmds = require("./commands/cmds");
const bestcar = require("./commands/best-car");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  // PING
  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }

  // CMDS
  if (interaction.commandName === "cmds") {
    await cmds.run(interaction);
  }

  // BEST-CAR
  if (interaction.commandName === "best-car") {
    await bestcar.run(interaction);
  }
});

client.login(process.env.TOKEN);

module.exports = client;
