import express from "express";
import routes from "./routes/routes.js";
import logger from "../logger/index.js";
import rawParser from "./util/raw-parser.js"

const port = process.env.PORT;
const app = express();

export default app;

app.use(rawParser);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Error handling
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    logger.error(`${err}`);
    return res.status(400).send({ status: 400, message: err.message });
  }
  next();
});

// Routing
app.use("/api", routes);

// Listen on port
const server = app.listen(port, () => {
  logger.info(`Started Express: Port ${server.address().port}`);
});
