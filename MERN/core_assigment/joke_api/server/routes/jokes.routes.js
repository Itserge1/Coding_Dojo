const jokesControllers = require("../controllers/jokes.controller");// jokesControllers contain textResponse as a proprety

// the "app" was recieved send over by server.js file at line 15
module.exports = app =>{
    app.get("/api/text", jokesControllers.textResponse); //this line create a route
    app.get("/api/jokes", jokesControllers.findAllJokes); //this line create a route
    app.post("/api/create", jokesControllers.createJokes); //this line create a route
    app.get("/api/findjoke/:_id", jokesControllers.findOneJokes); //this line create a route
    app.delete("/api/delete/:_id", jokesControllers.deleteJoke); //this line create a route
    app.patch("/api/update/:_id", jokesControllers.updateJoke); //this line create a route
    // app.get("/api/text", jokesControllers.textResponse); //this line create a route
}