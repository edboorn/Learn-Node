const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      activeProduct: true,
      formsCSS: true,
      productCSS: true,
    });
  };

  exports.getAdminProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/admin-products"
      });
    }); // Calling the fetchall function directly
  };
  
  
  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title,imageUrl,description,price);
    console.log(product);
    product.save(); // Uses save method defined in the Product class
    res.redirect("/");
  };