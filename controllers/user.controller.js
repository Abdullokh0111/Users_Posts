const service = require("../services/user.service");

const getAllUsers = async (req, res, next) => {
  try {
    const result = await service.getAllUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const result = await service.getUserById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const result = await service.addUser(req.body);
    res.status(201).json({ title: "Foydalanuvchi qo'shildi!" }, result);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getAllUsers, getUserById, addUser };
