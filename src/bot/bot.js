// Modules
import { Client, Intents, MessageEmbed } from "discord.js";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Logger
import logger from "../logger/index.js";

// Commands
import { runPing } from "./commands/ping.js";
import { runCmds } from "./commands/cmds.js";
import { runBestCar } from "./commands/best-car.js";

client.on("ready", () => {
  logger.info(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  logger.info(`Received command ${interaction.commandName}`);

  if (!interaction.isCommand()) {
    logger.warning(
      `Received command ${interaction.commandName}, but it's not registered`
    );
    return;
  }

  if (interaction.commandName === "ping")
    await runPing(interaction, logger, MessageEmbed);
  if (interaction.commandName === "cmds")
    await runCmds(interaction, logger, MessageEmbed);
  if (interaction.commandName === "best-car")
    await runBestCar(interaction, logger, MessageEmbed);
});

client.login(process.env.TOKEN);

export default client;
