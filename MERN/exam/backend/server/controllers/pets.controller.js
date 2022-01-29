const pets = require("../models/pets.model");

module.exports.text = (req, res) => {
    res.json({message:"get ready!"});
}

module.exports.CreatePet = (req, res) => {
    pets.create(req.body)
        .then( newPet => res.json({results: newPet}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}

module.exports.FindAllPets = (req, res) => {
    pets.find({})
        .then( AllPets => res.json({results: AllPets}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}

module.exports.FindOnePet = (req, res) => {
    pets.findOne({_id: req.params._id})
        .then( OnePet => res.json({results: OnePet}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}

module.exports.DeleteOnePet = (req, res) => {
    pets.deleteOne({_id: req.params._id})
        .then( deletePet => res.json({results: deletePet}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}

module.exports.EditOnePet = (req, res) => {
    pets.updateOne({_id: req.params._id}, req.body, {runValidators:true})
        .then( updatePet => res.json({results: updatePet}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}

module.exports.likePet = (req, res) => {
    pets.findByIdAndUpdate({_id: req.params._id}, {$inc: {like:1}}, {new:true})
        .then( updatePet => res.json({results: updatePet}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}

module.exports.FindByName = (req, res) => {
    pets.findOne({name: req.params.name})
        .then( OnePet => res.json({results: OnePet, message: "user Allready exist"}))
        .catch(error => res.status(400).json({message: "That did not work!!", error}))
}