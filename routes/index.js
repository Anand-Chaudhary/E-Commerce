const express = require('express');
const router = express.Router();
const productModel = require('../models/product')
const isLoggedin = require('../middlewares/isLoggedIn');

router.get('/', (req, res)=>{
    let error = req.flash("error");
    res.render("index", {error});
});

router.get("/shop", isLoggedin, async function(req, res){
    let products = await productModel.find();
    res.render('shop', {products});
});

module.exports = router;