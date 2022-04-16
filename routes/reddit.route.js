const routes = require("express").Router();
const client = require("../index");

routes.post("/", (req, res) => {
  client.channels.cache.get(`962049203650064385`).send(message);
  return res.status(200).json(req.body).end();
});

module.exports = routes;
