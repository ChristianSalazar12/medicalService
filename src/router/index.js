const { Router } = require("express");
const routerMedical = require("./medicalRouter");
const router = Router();

router.use("/medical", routerMedical);

module.exports = router;
