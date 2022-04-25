export async function runCmds(interaction, logger, MessageEmbed) {
  const embed = new MessageEmbed()
    .setColor("#000000")
    .setTitle("Bot Commands")
    .addFields({ name: "Is you alive?", value: "`ping`" })
    .addFields({ name: "Your'e looking at it", value: "`cmds`" });

  await interaction
    .reply({ embeds: [embed], ephemeral: true })
    .catch((error) => logger.error(error));
}