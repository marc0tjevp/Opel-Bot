const routes = require("express").Router();
const client = require("../bot");

routes.post("/", (req, res) => {
  console.dir(req.body);
  const body = JSON.stringify(req.body);
  client.channels.cache.get(`962049203650064385`).send(body);
  return res.status(200).json(req.body).end();
});

module.exports = routes;
