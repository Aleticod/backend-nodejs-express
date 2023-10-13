const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  // Generate faker data
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }
  // Create a CRUD
  // CREATE
  create() {}

  // READ
  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  // UPDATE
  update() {}

  // DELETE
  delete() {}
}

module.exports = ProductsService;
