function pizzaOven( crustType,sauceType,cheeses,toppings ) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
console.log(p1);

function pizzaOven( crustType,sauceType,cheeses,toppings ) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(p1);

function pizzaOven( crustType,sauceType,cheeses,toppings ) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.topping = toppings;
    return pizza;
}
var p1 = pizzaOven("hand tossed", "traditional", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(p1);

function pizzaOven( crustType,sauceType,cheeses,toppings ) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.topping = toppings;
    return pizza;
}
var p1 = pizzaOven("hand tossed", "Tomato Sauce", ["mozzarella", "feta"],["mushrooms", "chiken", "pineapple"]);
console.log(p1);

var sandwich = {
    bread:    ["Naan Bread", "Sourdough", "Pitta Bread", "Garlic Bread", "Ciabatta", "Olive Bread"],
    protein:  ["london broil", "heirloom tomatoes", "horseradish sauce"],
    cheese:   ["lacey swiss cheese", "heirloom tomatoes", "horseradish sauce"],
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
function dojosandwich(bread, protein,cheese,toppings){
    var sandwich = {};
    for (  i = 0 ;i < bread.lenght; i = Math.random * bread.lenght){
        sandwich.bread[i] = bread
    }
    sandwich.bread = bread
    sandwich.protein = protein
    sandwich.cheese = cheese
    sandwich.toppings = toppings
}

// var s1 = dojosandwich();
// console.log(s1)
// var i = 
// function getbread(bread)
// for (i < bread.lenght;) {
//     i = Math.random * bread.lenght
//     sandwich.bread[i] = bread
//     console.log(bread)
// }
// getbread(bread)
