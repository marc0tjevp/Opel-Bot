import { MessageEmbed } from "discord.js";

import express from "express";
const routes = express.Router();

// TODO: Don't import
import client from "../../bot/bot.js";
import logger from "../../logger/index.js";

routes.post("/", (req, res) => {
  const { title, imageUrl, content, postUrl, author, subreddit } = req.body;

  if (!title) return res.status(412).end();

  const newsArticleEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(title)
    .setURL(postUrl)
    .setTimestamp();

  if (imageUrl !== "https://ifttt.com/images/no_image_card.png")
    newsArticleEmbed.setImage(imageUrl);
  if (author)
    newsArticleEmbed.setAuthor({
      name: author,
    });
  if (content) newsArticleEmbed.setDescription(content);
  if (subreddit) newsArticleEmbed.setFooter({ text: `Posted on ${subreddit}` });

  logger.info(JSON.stringify(req.body));

  client.channels.cache
    .get(process.env.NEWS_CHANNEL)
    .send({ embeds: [newsArticleEmbed] })
    .catch((error) => {
      logger.error(error);
      return res.status(500).end();
    });

  return res.status(200).end();
});

export default routes;
