const faker  = require('@faker-js/faker');

class Company {
    constructor() {
        this.name = faker.commerce.product();
        this.price = `$${ faker.commerce.price() }`;
        this.department = faker.commerce.department();
    }
}
// console.log(new Company());


module.exports = Company;