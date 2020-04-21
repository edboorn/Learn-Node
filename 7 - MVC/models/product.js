const products = [];

module.exports = class Product {
  // Defining the model
  constructor(t) {
    this.title = t;
  }

  // Function within the class
  save() {
    products.push(this);
  }
  //Call this method on the class itself, not on an instantiated Object
  static fetchAll() {
    return products;
  }
};
