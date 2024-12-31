const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');

module.exports.registerUser = async(req, res) => {
    try {
        let { email, password, fullname } = req.body;
        let user = await userModel.findOne({email});
        if (user) return res.send('User Exists, Login');
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email, 
                        password: hash,
                        fullname
                    });
                    
                    let token = generateToken(user);
                    res.cookie('token', token);
                    res.redirect('/shop')
                }
            })
        })
    }

    catch (error) {
        res.send(error.messgae);
    };
}

module.exports.loginUser = async function (req, res) {
    let { email, password } = req.body;

    let user = await userModel.findOne({email})
    if(!user) return res.send('Email or Password incorrect');

    bcrypt.compare(password, user.password, function(err, result){
        if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect('/shop')
        }
        else{
            return res.send('Email or Password incorrect');
        }
    })
}