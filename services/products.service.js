const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

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
        isBlocked: faker.datatype.boolean(),
      });
    }
  }
  // Create a CRUD
  // CREATE
  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  // READ
  async find() {
    return this.products;
  }

  async findOne(id) {
    // const name = this.getTotal();
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlocked) {
      throw boom.conflict('product is blocked');
    }
    return product;
  }

  // UPDATE
  async update(id, data) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      // throw new Error('Product not found');
      throw boom.notFound('Product not found');
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
  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      // throw new Error('Product no found');
      throw boom.notFound('Product not found');
    } else {
      this.products.splice(index, 1);
      return { id };
    }
  }
}

module.exports = ProductsService;
