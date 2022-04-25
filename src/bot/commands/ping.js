export async function runPing(interaction, logger, MessageEmbed) {
  await interaction.reply("Pong!").catch((error) => logger.error(error));
}
