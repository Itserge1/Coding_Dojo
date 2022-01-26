const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/name_of_your_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("you're connected to mongo db!"))
    .catch(err => console.log("connection to mongo db Failed!", err))