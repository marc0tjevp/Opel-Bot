const routes = require("express").Router();
const sendMessage = require("../index").sendMessage;

routes.post("/", (req, res) => {
  sendMessage(req.body);
  return res.status(200).json(req.body).end();
});

module.exports = routes;
