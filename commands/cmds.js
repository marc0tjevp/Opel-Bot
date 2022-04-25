const { MessageEmbed } = require("discord.js");

async function run(interaction) {
  const embed = new MessageEmbed()
    .setColor("#000000")
    .setTitle("Bot Commands")
    .addFields({ name: "Is you alive?", value: "`ping`" })
    .addFields({ name: "Your'e looking at it", value: "`cmds`" });

    await interaction.reply({ embeds: [commandResponse], ephemeral: true });
}

module.exports = {
  run,
};
