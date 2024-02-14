const express = require('express')
const router = express.Router();
const {getAllPosts,updatePost,deletePost,createPost,  getPost} = require('../controllers/posts')
router.post('/',createPost);
router.delete('/:id',deletePost)
router.put('/:id',updatePost)
router.get('/:id',getPost);
router.get('/',getAllPosts);
module.exports = router