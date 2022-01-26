const jokes = require("../models/jokes.model");


module.exports.textResponse = (req, res) => {
    res.json({message:"hey it's me!"})
}