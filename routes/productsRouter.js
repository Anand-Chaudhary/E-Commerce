const express = require('express');
const upload = require('../config/multer-config');
const productModel = require('../models/product')
const router = express.Router();

router.post('/create', upload.single('image'), async (req, res) => {
    try {
        let { name, price, discount, bgcolor, panelcolor, textcolor, } = req.body;

        let product = await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor,
        });

        res.redirect('/owners/admin');
        req.flash("succes", "product created successfully");
    }
    catch (err){
        res.send(err.message);
    }
})

module.exports = router;