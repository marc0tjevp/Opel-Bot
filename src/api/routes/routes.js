import express from "express";
import redditRoutes from "./reddit.route.js";

const routes = express.Router();

routes.get("/", (req, res) =>
  res.status(200).json({ message: "Hello World!" })
);

routes.use("/reddit", redditRoutes);

routes.use("*", (req, res) =>
  res.status(404).json({ message: "Not found" }).end()
);

export default routes;
