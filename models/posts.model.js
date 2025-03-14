const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    image: { type: String},
});

const posts = mongoose.model("Posts", postSchema);

module.exports = posts;
