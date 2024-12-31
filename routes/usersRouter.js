const express = require('express');
const {registerUser, loginUser} = require('../controller/authController');
const router = express.Router();

router.get('/shop', (req, res) => {
    res.render('shop');
})

router.post('/register', registerUser);

router.post('/login', loginUser)

router.get('/logout', (req, res)=>{
    res.cookie("token", "")
    res.redirect('/')
});

module.exports = router;