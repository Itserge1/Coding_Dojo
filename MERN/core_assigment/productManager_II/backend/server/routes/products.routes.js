const productsContollers = require("../controllers/products.controller");
const products = require("../models/products.model");

module.exports = app =>{
    app.get("/", productsContollers.text);
    app.post("/create", productsContollers.createProduct);
    app.get("/findall", productsContollers.FindAllsProducts);
    app.get("/product/:_id", productsContollers.FindOneProduct);
    app.delete("/delete/:_id", productsContollers.DeleteOneProduct );
    app.patch("/update/:_id", productsContollers.UpdateOneProduct)
}