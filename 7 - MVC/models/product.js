const fs = require("fs");
const path = require("path");

const products = [];
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  // Defining the model
  constructor(t) {
    this.title = t;
  }

  // Function within the class
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  //Call this method on the class itself, not on an instantiated Object
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
