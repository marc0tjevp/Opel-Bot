import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

import logger from "../logger/index.js";

const commands = [
  {
    name: "cmds",
    description: "List all commands!",
  },
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "best-car",
    description: "What's the best Opel Model?",
  },
];

const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

(async () => {
  try {
    logger.info("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      {
        body: commands,
      }
    );

    logger.info("Successfully reloaded application (/) commands.");
  } catch (error) {
    logger.error(error);
  }
})();
