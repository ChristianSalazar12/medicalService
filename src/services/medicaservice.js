const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllServicesService = async (req, res) => {
  try {
    const services = await prisma.servicio.findMany();
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

const getByIdServiceService = async (id) => {
  try {
    const service = await prisma.servicio.findUnique({
      where: { id: parseInt(id) },
    });
    return service;
  } catch (error) {
    throw new Error("An error occurred while fetching the service by ID.");
  }
};
const createServicesService = async (data) => {
  try {
    const newService = await prisma.servicio.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: parseFloat(data.precio),
      },
    });
    return newService;
  } catch (error) {
    throw new Error("An error occurred while creating the service.");
  }
};
const updateServiceService = async (id, data) => {
  try {
    const updatedService = await prisma.servicio.update({
      where: { id: parseInt(id) },
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: parseFloat(data.precio),
      },
    });
    return updatedService;
  } catch (error) {
    throw new Error("An error occurred while updating the service.");
  }
};
const deleteServiceService = async (id) => {
  try {
    const deletedService = await prisma.servicio.delete({
      where: { id: parseInt(id) },
    });
    return deletedService;
  } catch (error) {
    throw new Error("An error occurred while deleting the service.");
  }
};

module.exports = {
  getAllServicesService,
  getByIdServiceService,
  createServicesService,
  updateServiceService,
  deleteServiceService,
};
