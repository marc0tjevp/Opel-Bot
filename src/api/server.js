import express from "express";
import routes from "./routes/routes.js";
import logger from "../logger/index.js";

const port = process.env.PORT;
const app = express();

export default app;

// Accept JSON
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routing
app.use("/api", routes);

// Listen on port
const server = app.listen(port, () => {
  logger.info(`Started Express: Port ${server.address().port}`);
});
