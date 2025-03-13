const { getUserById } = require("../controllers/user.controller");
const models = require("../models/models");

const getAllUsers = async () => {
  try {
    const result = await models.find({});
    return result;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const result = await models.findById(id);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllUsers, getUserById };
