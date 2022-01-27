const express = require("express");
const app = express();
const port = 8000
const cors = require("cors");
app.use(cors());

// app.get("/", (req, res) => {
//     res.json({message:"get ready!"});
// })

// start the confi file to communicate with the DB
require("./server/config/mongoose.config");

//  important to accept post data(post request)
app.use(express.json(), express.urlencoded({extended:true}));

// sending the app over to jokes.route files in the route folder inside the server folder
require("./server/routes/products.routes")(app);

app.listen(port, ()=> console.log(`Running on ${port}`))