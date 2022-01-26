const jokesControllers = require("../controllers/jokes.controller");

module.exports = app =>{
    app.get("/api/text", jokesControllers.textResponse);
}