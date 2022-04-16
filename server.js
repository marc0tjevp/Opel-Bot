const express = require("express");
const routes = require("./routes/routes");

const port = process.env.PORT;
const app = express();

module.exports = app;

// Routing
app.use("/api", routes);

// Listen on port
const server = app.listen(port, () => {
  console.log(`Started Express: Port ${server.address().port}`);
});
