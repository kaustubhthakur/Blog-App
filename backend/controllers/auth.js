const User = require('../models/User')
const jwt = require('jsonwebtoken')
const createError = require('../utils/error')
require('dotenv').config()
const bcrypt = require('bcryptjs')
const register = async (req, res, next) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    try {
const newuser = new User({
   username:req.body.username,
   email:req.body.email,
   password:hash,
})
const saveuser = await newuser.save();
res.status(201).json(saveuser);
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user)
            return next(createError(404, "user not found"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect)
            return next(createError(400,
                "wrong password or username"));


           const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET);


        const { password, isAdmin, ...otherDetails } = user._doc;

        res.cookie("acces_token",token,{httpOnly:true,}).status(200).json({ ...otherDetails });
    } catch (error) {
        next(error)
    }
}
module.exports = { register, login };