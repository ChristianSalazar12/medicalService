const {
  getAllDescriptionsService,
  getByIdDescriptionService,
  createDescriptionService,
  updateDescriptionService,
  deleteDescriptionService,
} = require("../services/descriptionService");

const getAllDescription = async (req, res) => {
  try {
    const descriptions = await getAllDescriptionsService();
    return res.status(200).json({
      status: "success",
      data: descriptions,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching descriptions.",
      error: error.message,
    });
  }
};
const getByIdDescription = async (id) => {
  try {
    const description = await getByIdDescriptionService(id);
    return res.status(200).json({
      status: "success",
      data: description,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the description by ID.",
      error: error.message,
    });
  }
};
const createDescription = async (data) => {
  try {
    const newDescription = await createDescriptionService(data);
    return res.status(201).json({
      status: "success",
      data: newDescription,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while creating the description.",
      error: error.message,
    });
  }
};
const updateDescription = async (id, data) => {
  try {
    const updatedDescription = await updateDescriptionService(id, data);
    return res.status(200).json({
      status: "success",
      data: updatedDescription,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while updating the description.",
      error: error.message,
    });
  }
};
const deleteDescription = async (id) => {
  try {
    const deletedDescription = await deleteDescriptionService(id);
    return res.status(200).json({
      status: "success",
      data: deletedDescription,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while deleting the description.",
      error: error.message,
    });
  }
};
module.exports = {
  getAllDescription,
  getByIdDescription,
  createDescription,
  updateDescription,
  deleteDescription,
};
