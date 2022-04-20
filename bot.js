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

  // BEST-CAR
  if (interaction.commandName === "best-car") {
    const models = [
      "Adam",
      "Admiral",
      "Agila",
      "Ampera",
      "Ampera-e",
      "Antara",
      "Arena",
      "Ascona",
      "Astra",
      "Astravan",
      "Bedford Blitz",
      "Blitz",
      "Calibra",
      "Campo",
      "Cascada",
      "Chevette",
      "Combo",
      "Commodore",
      "Corsa",
      "Corsavan",
      "Crossland",
      "Diplomat",
      "Frontera",
      "GT",
      "Insignia",
      "Kadett",
      "Kapitän",
      "Karl",
      "Manta",
      "Meriva",
      "Mokka",
      "Monterey",
      "Monza",
      "Movano",
      "Olympia Rekord",
      "Olympia",
      "Omega",
      "P4",
      "RAK",
      "RAK2",
      "Regent",
      "Rekord",
      "Senator",
      "Signum",
      "Sintra",
      "Speedster",
      "Super 6",
      "Tigra",
      "Vectra",
      "Vivaro Tour",
      "Vivaro",
      "Zafira Tourer",
      "Zafira",
    ];

    const random = Math.floor(Math.random() * models.length);

    await interaction.reply(models[random]);
  }
});

client.login(process.env.TOKEN);

module.exports = client;
