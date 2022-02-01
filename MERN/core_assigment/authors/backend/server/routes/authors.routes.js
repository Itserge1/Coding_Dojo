const authorsContollers = require("../controllers/authors.controller");
const authors = require("../models/authors.model");

module.exports = app =>{
    app.get("/", authorsContollers.text);
    app.post("/new",authorsContollers.CreateAuthor )
    app.get("/find", authorsContollers.FindAllAuthors)
    app.get("/find/:_id", authorsContollers.FindOneAuthors)
    app.delete("/delete/:_id", authorsContollers.DeleteOneAuthor)
    app.patch("/edit/:_id", authorsContollers.EditOneAuthors )
}