const {
  getAllServicesService,
  getByIdServiceService,
  createServicesService,
  updateServiceService,
  deleteServiceService,
} = require("../services/medicaservice");

const getAllServices = async (req, res) => {
  try {
    const services = getAllServicesService();
    return res.status(200).json({
      status: "success",
      data: services,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching services.",
      error: error.message,
    });
  }
};
const getByIdService = async (id) => {
  try {
    const service = await getByIdServiceService(id);
    return res.status(200).json({
      status: "success",
      data: service,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the service by ID.",
      error: error.message,
    });
  }
};
const createServices = async (data) => {
  try {
    const newService = await createServicesService(data);
    return res.status(201).json({
      status: "success",
      data: newService,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while creating the service.",
      error: error.message,
    });
  }
};
const updateService = async (id, data) => {
  try {
    const updatedService = await updateServiceService(id, data);
    return res.status(200).json({
      status: "success",
      data: updatedService,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while updating the service.",
      error: error.message,
    });
  }
};
const deleteService = async (id) => {
  try {
    const deletedService = await deleteServiceService(id);
    return res.status(200).json({
      status: "success",
      data: deletedService,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while deleting the service.",
      error: error.message,
    });
  }
};

module.exports = {
  getAllServices,
  getByIdService,
  createServices,
  updateService,
  deleteService,
};
