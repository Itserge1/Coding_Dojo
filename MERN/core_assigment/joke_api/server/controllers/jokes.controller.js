const jokes = require("../models/jokes.model");

// Respond for a route
module.exports.textResponse = (req, res) => {
    res.json({message:"hey it's me!"});
}

// Respond for a route
module.exports.findAllJokes = (req, res) => {
    jokes.find({})
        .then(results => res.json({results: results}))
        .catch(error => res.status(400).json({message: "That didn't work", error}))
}

module.exports.createJokes = (req, res) => {
    jokes.create(req.body)
        .then(newJoke => res.json({results: newJoke}))
        .catch(error => res.status(400).json({message: "That didn't work", error}))
}

module.exports.findOneJokes = (req, res) => {
    jokes.findOne({_id: req.params._id})
        .then(oneJoke => res.json({results: oneJoke}))
        .catch(error => res.status(400).json({message: "That didn't work", error}))
}

module.exports.deleteJoke = (req, res) => {
    jokes.deleteOne({_id: req.params._id})
        .then(deleteJoke => res.json({results: deleteJoke}))
        .catch(error => res.status(400).json({message: "That didn't work", error}))
}

module.exports.updateJoke = (req, res) => {
    jokes.updateOne({_id: req.params._id}, req.body)
    .then(updateJoke => res.json({results: updateJoke}) )
    .catch(error => res.status(400).json({message: "That didn't work", error}))
}