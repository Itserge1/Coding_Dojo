const mongoose = require("mongoose");

const petsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "you need a pet"],
        minlength: [3, "you need at least 3 characters!"]
    },
    type: {
        type: String,
        required: [true, "you need a Type"],
        minlength: [3, "you need at least 3 characters!"]
    },
    description: {
        type: String,
        required: [true, "you need a description"],
        minlength: [3, "you need at least 3 characters!"]
    },
    skill_1: {
        type: String,
    },
    skill_2: {
        type: String,
    },
    skill_3: {
        type: String,
    },
    
    like: {
        type: Number,
    },
    // books: {
    //     type: [String],
    //     required: [true, "you need book"],
    //     validate: {
    //         validator: (input) => {
    //             // return true for valide, false for invalid
    //             return input.length >1
    //         },
    //         message: "you need at least one character(s)"
    //     }
    //     // min: [1, "age must ne grather than 0"]
    //     // minlength: [2, "you need at least 3 characters!"],
    // }
}, {timestamps: true});

const pets = mongoose.model("Pets",  petsSchema);

module.exports = pets;