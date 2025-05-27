const { Router } = require("express");
const {
  getAllServices,
  getByIdService,
  createServices,
  updateService,
  deleteService,
} = require("../controllers/medicalController");
const {
  getAllDescription,
  getByIdDescription,
  createDescription,
  updateDescription,
  deleteDescription,
} = require("../controllers/descriptionController");
const {
  getAllComplications,
  getByIdComplication,
  createComplication,
  updateComplication,
  deleteComplication,
} = require("../controllers/complicationController");

const routerMedical = Router();

routerMedical.get("/medical", (req, res) => {
  res.send("Hello you are in medical Services!");
});
routerMedical.get("/services", getAllServices);
routerMedical.get("/services/:id", getByIdService);
routerMedical.post("/services/add", createServices);
routerMedical.put("/services/update/:id", updateService);
routerMedical.delete("/services/delete/:id", deleteService);

routerMedical.get("/description", getAllDescription);
routerMedical.get("/description/:id", getByIdDescription);
routerMedical.post("/description/add", createDescription);
routerMedical.put("/description/update/:id", updateDescription);
routerMedical.delete("/description/delete/:id", deleteDescription);

routerMedical.get("/complications", getAllComplications);
routerMedical.get("/complications/:id", getByIdComplication);
routerMedical.post("/complications/add", createComplication);
routerMedical.put("/complications/update/:id", updateComplication);
routerMedical.delete("/complications/delete/:id", deleteComplication);

module.exports = routerMedical;
