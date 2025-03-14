const models = require("../models/users.model");

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

const addUser = async (user) => {
  try {
    const result = await models.create(user);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllUsers, getUserById, addUser };
