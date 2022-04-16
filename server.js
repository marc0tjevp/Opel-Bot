const express = require("express");
const bodyParser = require('body-parser');
const routes = require("./routes/routes");

const port = process.env.PORT;
const app = express();

module.exports = app;

// Accept JSON
app.use(
  bodyParser.json({
    extended: true
  })
);

// Routing
app.use("/api", routes);

// Listen on port
const server = app.listen(port, () => {
  console.log(`Started Express: Port ${server.address().port}`);
});
