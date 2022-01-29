const petsContollers = require("../controllers/pets.controller");
const pets = require("../models/pets.model");

module.exports = app =>{
    app.get("/", petsContollers.text);
    app.post("/new",petsContollers.CreatePet )
    app.get("/find", petsContollers.FindAllPets)
    app.get("/find/:_id", petsContollers.FindOnePet)
    app.delete("/delete/:_id", petsContollers.DeleteOnePet)
    app.patch("/edit/:_id", petsContollers.EditOnePet )
    app.patch("/like/:_id", petsContollers.likePet )
    app.get("/findname/:name", petsContollers.FindByName)
}