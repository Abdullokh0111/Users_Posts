const models = require("../models/posts.model");

const getAllPosts = async () => {
    try {
        const result = await models.find({});
        return result;
    } catch (error) {
        throw error;
    }
};

const getPostById = async (id) => {
    try {
        const result = await models.findById(id);
        return result;
    } catch (error) {
        throw error;
    }
};

const addPost = async (post) => {
    try {
        const result = await models.create(post);
        return result;
    } catch (error) {
        throw error;
    }
};

const updatePostById = async (id, post) => {
    try {
        const result = await models.findByIdAndUpdate(id, post);
        return result;
    } catch (error) {
        throw error;
    }
};

const deletePosrById = async (id) => {
    try {
        const result = await models.findByIdAndDelete(id);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllPosts, getPostById, addPost, updatePostById, deletePosrById };