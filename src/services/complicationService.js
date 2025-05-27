const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllComplicationsService = async (req, res) => {
  try {
    const complications = await prisma.complicacion.findMany();
    return complications;
  } catch (error) {
    throw new Error("An error occurred while fetching complications.");
  }
};
const getByIdComplicationService = async (id) => {
  try {
    const complication = await prisma.complicacion.findUnique({
      where: { id: parseInt(id) },
    });
    return complication;
  } catch (error) {
    throw new Error("An error occurred while fetching the complication by ID.");
  }
};
const createComplicationService = async (data) => {
  try {
    const newComplication = await prisma.complicacion.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
      },
    });
    return newComplication;
  } catch (error) {
    throw new Error("An error occurred while creating the complication.");
  }
};
const updateComplicationService = async (id, data) => {
  try {
    const updatedComplication = await prisma.complicacion.update({
      where: { id: parseInt(id) },
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
      },
    });
    return updatedComplication;
  } catch (error) {
    throw new Error("An error occurred while updating the complication.");
  }
};
const deleteComplicationService = async (id) => {
  try {
    const deletedComplication = await prisma.complicacion.delete({
      where: { id: parseInt(id) },
    });
    return deletedComplication;
  } catch (error) {
    throw new Error("An error occurred while deleting the complication.");
  }
};
module.exports = {
  getAllComplicationsService,
  getByIdComplicationService,
  createComplicationService,
  updateComplicationService,
  deleteComplicationService,
};
