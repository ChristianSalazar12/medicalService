const {
  getAllComplicationsService,
  getByIdComplicationService,
  createComplicationService,
  updateComplicationService,
  deleteComplicationService,
} = require("../services/complicationService");

const getAllComplications = async (req, res) => {
  try {
    const complications = await getAllComplicationsService();
    res.status(200).json(complications);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching complications.",
      error: error.message,
    });
  }
};
const getByIdComplication = async (req, res) => {
  const { id } = req.params;
  try {
    const complication = await getByIdComplicationService(id);
    if (!complication) {
      return res.status(404).json({
        status: "error",
        message: "Complication not found.",
      });
    }
    res.status(200).json(complication);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the complication by ID.",
      error: error.message,
    });
  }
};
const createComplication = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const newComplication = await createComplicationService({
      nombre,
      descripcion,
    });
    res.status(201).json({
      status: "success",
      data: newComplication,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while creating the complication.",
      error: error.message,
    });
  }
};
const updateComplication = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const updatedComplication = await updateComplicationService(id, {
      nombre,
      descripcion,
    });
    res.status(200).json({
      status: "success",
      data: updatedComplication,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while updating the complication.",
      error: error.message,
    });
  }
};
const deleteComplication = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedComplication = await deleteComplicationService(id);
    res.status(200).json({
      status: "success",
      data: deletedComplication,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while deleting the complication.",
      error: error.message,
    });
  }
};

module.exports = {
  getAllComplications,
  getByIdComplication,
  createComplication,
  updateComplication,
  deleteComplication,
};
