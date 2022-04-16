const routes = require("express").Router();
const redditRoutes = require("./reddit.route");

routes.get("/", (req, res) =>
  res.status(200).json({ message: "Hello World!" })
);

routes.use("/reddit", redditRoutes);

routes.use("*", (req, res) =>
  res.status(404).json({ message: "Not found" }).end()
);

module.exports = routes;
