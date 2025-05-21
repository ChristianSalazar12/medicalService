const { Router } = require("express");
const routerMedical = require("./medicalRouter");
const router = Router();

router.use("/medical", routerMedical);

router.get("/", (req, res) => {
  res.send("Hello you are in the API index!");
});

module.exports = router;
