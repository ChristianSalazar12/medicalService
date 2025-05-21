const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");
const route = require("./router");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", route);

module.exports = app;
