const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "you need and Author"],
        minlength: [3, "you need at least 3 characters!"]
    },
    age: {
        type: Number,
        required: [true, "you need Age"],
        min: [1, "age must ne grather than 0"],
        validate: {
            validator: (input) => {
                // return true for valide, false for invalid
                return input >= 18
            },
            message: "80's book only"
        }
    },
    books: {
        type: [String],
        required: [true, "you need book"],
        validate: {
            validator: (input) => {
                // return true for valide, false for invalid
                return input.length >1
            },
            message: "you need at least one character(s)"
        }
        // min: [1, "age must ne grather than 0"]
        // minlength: [2, "you need at least 3 characters!"],
    }
}, {timestamps: true});

const authors = mongoose.model("Authors", authorsSchema);

module.exports = authors;