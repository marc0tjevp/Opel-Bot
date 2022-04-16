const routes = require("express").Router();
const client = require("../bot");

routes.post("/", (req, res) => {
  console.dir(client);
  client.channels.cache.get(`962049203650064385`).send(req.body);
  return res.status(200).json(req.body).end();
});

module.exports = routes;
