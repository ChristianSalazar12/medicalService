const { Router } = require("express");

const routerMedical = Router();

routerMedical.get("/medical", (req, res) => {
  res.send("Hello you are in medical Services!");
});

module.exports = routerMedical;
