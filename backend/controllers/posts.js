const Post = require('../models/Post')
const createPost = async (req, res, next) => {
    try {
        const newpost = new Post(req.body);
        const savepost = await newpost.save();
        res.status(201).json(savepost);
    } catch (error) {
        next(error);
    }
}
const deletePost = async (req, res, next) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Your post has been deleted.");
    } catch (error) {
        next(error)
    }
}
const updatePost = async (req, res, next) => {
    try {
        const updatedpost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedpost);
    } catch (error) {
        next(error)
    }
}
const getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        next(error)
    }
}
const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts);
    } catch (error) {
        next(error)
    }
}
module.exports = { createPost ,getAllPosts,getPost,deletePost,updatePost}