const faker  = require('@faker-js/faker');

class User {
    constructor() {
        this.name = faker.name.firstName();
        this.address = {street: faker.address.streetName(), city: faker.address.city(), state: faker.address.state(), zipCode: faker.address.zipCode(), country: faker.address.country()};
    }
}
// console.log(new User());


module.exports = User;