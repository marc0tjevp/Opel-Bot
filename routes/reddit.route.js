const routes = require("express").Router();

routes.post("/", (req, res) => {
  return res.status(200).json(req.body).end();
});

module.exports = routes;
