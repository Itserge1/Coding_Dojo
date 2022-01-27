const products = require("../models/products.model");

module.exports.text = (req, res) => {
    res.json({message:"get ready!"});
}

module.exports.createProduct = (req, res) => {
    products.create(req.body)
        .then(newProduct => res.json({result: newProduct}))
        .catch(error => res.status(400).json({message: "That didn't work", error}))
}

module.exports.FindAllsProducts = (req, res) => {
    products.find({})
        .then(allProduct =>res.json({results: allProduct}))
        .catch(error => res.status(400).json({message: "That didn't work", error}))
}

module.exports.FindOneProduct = (req, res) => {
    products.findOne({_id: req.params._id})
        .then(oneProduct => res.json({results: oneProduct}))
        .catch(error => res.status(400).json({message: "That didn't work", error}))
}

module.exports.DeleteOneProduct = (req, res) => {
    products.deleteOne({_id: req.params._id})
        .then(deleteProduct => res.json({result: deleteProduct}))
        .catch(error => res.status(400).json({message: "Error!!!", error}))
}

module.exports.UpdateOneProduct = (req, res) => {
    products.updateOne({_id: req.params._id}, req.body)
        .then(updateProduct => res.json({results: updateProduct}))
        .catch(error => res.status(400).json({message: "Error!!!", error}))
}