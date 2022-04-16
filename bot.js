const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

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
    const embed = new MessageEmbed()
      .setColor("#000000")
      .setTitle("Bot Commands")
      .addFields({ name: "Is you alive?", value: "`ping`" })
      .addFields({ name: "Your'e looking at it", value: "`cmds`" });

    interaction.reply({ embeds: [embed], ephemeral: true });
  }
});

client.login(process.env.TOKEN);

module.exports = client;