const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
}, {timestamps: true});

const products = mongoose.model("Products", productSchema);

module.exports = products;