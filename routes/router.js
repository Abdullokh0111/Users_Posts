const express = require("express");
const multer = require("multer");
const path = require("path");
const userController = require("../controllers/user.controller");
const postController = require("../controllers/post.controller");

const router = express.Router();

// Настраиваем хранилище для загружаемых файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Папка, куда будут сохраняться файлы
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Генерируем уникальное имя файла
  },
});

const upload = multer({ storage }); // Создаем middleware для загрузки файлов

// --- Маршруты для пользователей ---
router
  .get("/users", userController.getAllUsers)
  .get("/users/:id", userController.getUserById)
  .post("/users", userController.addUser);

// --- Маршруты для постов ---
router
  .get("/posts", postController.getAllPosts)
  .get("/posts/:id", postController.getPostById)
  .put("/posts/:id", postController.updatePostById)
  .delete("/posts/:id", postController.deletePostById) // Исправлена ошибка deletePosrById -> deletePostById
  .post("/posts", upload.single("image"), postController.addPost); // Добавляем загрузку фото

module.exports = router;
