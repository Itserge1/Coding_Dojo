const mongoose = require("mongoose");

//new mongoose.Schema is making a brand new object from a class. 
// the object that we pass in as a parametter determine the structure of our data. (almost like a constructor)
const jokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [10, "setup must be at least 10 characters long"]
    },
    punchline : {
        type: String,
        minlength: [3, 'punchline need to be at least 3 characters long']
    },
}, {timestamps: true}); 

const jokes = mongoose.model("Jokes", jokeSchema);

module.exports = jokes;