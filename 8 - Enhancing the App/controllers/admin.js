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
    const product = new Product(req.body.title);
    product.save(); // Uses save method defined in the Product class
    res.redirect("/");
  };