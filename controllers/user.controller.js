const service = require("../services/user.service");
const handler = require("../utils/error.handler");

const getAllUsers = handler(async (req, res, next) => {
  const result = await service.getAllUsers();
  res.status(200).json(result);
});

const getUserById = handler(async (req, res, next) => {
  const result = await service.getUserById(req.params.id);
  res.status(200).json(result);
});

const addUser = handler(async (req, res, next) => {
  const result = await service.addUser(req.body);
  res.status(201).json({ title: "Foydalanuvchi qo'shildi!" }, result);
});

module.exports = { getAllUsers, getUserById, addUser };
