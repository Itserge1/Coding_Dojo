const faker  = require('@faker-js/faker');

class User {
    constructor() {
        this.name = faker.commerce.product();
        this.price = `$${ faker.commerce.price() }`;
        this.department = faker.commerce.department();
    }
}
// console.log(new User());


module.exports = User;