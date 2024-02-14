const express = require('express')
const router = express.Router();
const {updateUser,deleteUser,getAllUsers,getUser} = require('../controllers/users')
router.put('/:id',updateUser);
router.delete('/:id',deleteUser)
router.get('/:id',getUser);
router.get('/',getAllUsers);
module.exports = router