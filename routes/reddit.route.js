const { MessageEmbed } = require("discord.js");
const routes = require("express").Router();
const client = require("../bot");

routes.post("/", (req, res) => {
  const { title, imageUrl, content, postUrl, author } = req.body;

  const exampleEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(title)
    .setURL(postUrl)
    .setAuthor({
      name: author,
    })
    .setDescription(content)
    .setTimestamp();

  if (imageUrl !== "https://ifttt.com/images/no_image_card.png")
    exampleEmbed.setImage(imageUrl);

  console.dir(req.body);

  client.channels.cache
    .get(`962049203650064385`)
    .send({ embeds: [exampleEmbed] });

  return res.status(200).end();
});

module.exports = routes;
