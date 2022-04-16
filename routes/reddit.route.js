const routes = require("express").Router();
const client = require("../bot");

routes.post("/", (req, res) => {
  console.dir(req.body);
  // client.channels.cache.get(`962049203650064385`).send({ payload: req.body });
  return res.status(200).end();
});

module.exports = routes;
