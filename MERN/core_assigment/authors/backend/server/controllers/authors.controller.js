const authors = require("../models/authors.model");

module.exports.text = (req, res) => {
    res.json({message:"get ready!"});
}

module.exports.CreateAuthor = (req, res) => {
    authors.create(req.body)
        .then( newAuthor => res.json({results: newAuthor}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}

module.exports.FindAllAuthors = (req, res) => {
    authors.find({})
        .then( AllAuthor => res.json({results: AllAuthor}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}

module.exports.FindOneAuthors = (req, res) => {
    authors.findOne({_id: req.params._id})
        .then( OneAuthor => res.json({results: OneAuthor}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}

module.exports.DeleteOneAuthor = (req, res) => {
    authors.deleteOne({_id: req.params._id})
        .then( deleteAuthor => res.json({results: deleteAuthor}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}

module.exports.EditOneAuthors = (req, res) => {
    authors.updateOne({_id: req.params._id}, req.body, {runValidators:true})
        .then( updateAuthor => res.json({results: updateAuthor}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}