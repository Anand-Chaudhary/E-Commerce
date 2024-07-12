const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    picture : String,
    name : String,
    price : Number,
    discount : {
        type : Number,
        default : 0,
    },
    bgcolor : String,
    pannelcolor : String,
    textcolor : String,
});

module.exports = mongoose.model('product', productSchema);