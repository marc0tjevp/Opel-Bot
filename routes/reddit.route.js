const { MessageEmbed } = require("discord.js");
const routes = require("express").Router();

const client = require("../bot");

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

  console.dir(req.body);

  client.channels.cache
    .get(process.env.NEWS_CHANNEL)
    .send({ embeds: [newsArticleEmbed] });

  // Let IFTTT know the webhook was handled
  return res.status(200).end();
});

module.exports = routes;
