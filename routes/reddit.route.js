const routes = require("express").Router();

routes.post("/", (req, res) => {
  console.dir(req.body);
});

module.exports = routes;
