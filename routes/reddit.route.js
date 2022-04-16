const routes = require("express").Router();
const client = require("../bot");

routes.post("/", (req, res) => {
  const body = req.body.toString();
  client.channels.cache.get(`962049203650064385`).send(body);
  return res.status(200).json(req.body).end();
});

module.exports = routes;
