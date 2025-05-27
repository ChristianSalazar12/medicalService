const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllDescriptionsService = async (req, res) => {
  try {
    const descriptions = await prisma.descripcion.findMany();
    return descriptions;
  } catch (error) {
    throw new Error("An error occurred while fetching descriptions.");
  }
};
const getByIdDescriptionService = async (id) => {
  try {
    const description = await prisma.descripcion.findUnique({
      where: { id: parseInt(id) },
    });
    return description;
  } catch (error) {
    throw new Error("An error occurred while fetching the description by ID.");
  }
};
const createDescriptionService = async (data) => {
  try {
    const newDescription = await prisma.descripcion.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
      },
    });
    return newDescription;
  } catch (error) {
    throw new Error("An error occurred while creating the description.");
  }
};
const updateDescriptionService = async (id, data) => {
  try {
    const updatedDescription = await prisma.descripcion.update({
      where: { id: parseInt(id) },
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
      },
    });
    return updatedDescription;
  } catch (error) {
    throw new Error("An error occurred while updating the description.");
  }
};
const deleteDescriptionService = async (id) => {
  try {
    const deletedDescription = await prisma.descripcion.delete({
      where: { id: parseInt(id) },
    });
    return deletedDescription;
  } catch (error) {
    throw new Error("An error occurred while deleting the description.");
  }
};
module.exports = {
  getAllDescriptionsService,
  getByIdDescriptionService,
  createDescriptionService,
  updateDescriptionService,
  deleteDescriptionService,
};
