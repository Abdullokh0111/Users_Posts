const service = require("../services/post.service");
const handler = require("../utils/error.handler");
const Post = require("../models/posts.model");

const getAllPosts = handler(async (req, res, next) => {
    const result = await service.getAllPosts();
    res.status(200).json(result);
});

const getPostById = handler(async (req, res, next) => {
    const result = await service.getPostById(req.params.id);
    res.status(200).json(result);
});

const addPost = handler(async (req, res) => {
    try {
      const { title, content, author } = req.body;
  
      if (!req.file) {
        return res.status(400).json({ error: "Файл не загружен!" });
      }
  
      const newPost = new Post({
        title,
        content,
        author,
        image: req.file.path,
      });
  
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

const updatePostById = handler(async (req, res, next) => {
    const result = await service.updatePostById(req.params.id, req.body);
    res.status(201).json({ title: "Post o'zgartirildi!" , result});
});

const deletePostById = handler(async (req, res, next) => {
    const result = await service.deletePosrById(req.params.id);
    res.status(201).json({ title: "Post o'chirildi!" , result});
});

module.exports = { getAllPosts, getPostById, addPost, updatePostById, deletePostById };