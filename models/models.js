const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
  image: { type: String, required: true },
});
const users = mongoose.model("users", userScheme);
const posts = mongoose.model("posts", postSchema);

module.exports = { users, posts };
