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
  create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  // READ
  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  // UPDATE
  update(id, data) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    } else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...data,
      };
    }
    return this.products[index];
  }

  // DELETE
  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product no found');
    } else {
      this.products.splice(index, 1);
    }
    return { id };
  }
}

module.exports = ProductsService;
