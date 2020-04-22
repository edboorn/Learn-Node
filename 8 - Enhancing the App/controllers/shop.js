const Product = require("../models/product");


exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products"
    });
  }); // Calling the fetchall function directly
};

exports.getIndex = (req,res,next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Home Page",
      path: "/"
    });
  });
}

exports.getCart = (req,res,next) => {
  res.render('shop/cart',{
    pageTitle: "Your Cart",
    path : '/cart'})
}

exports.getCheckout = (req,res,next) => {
  res.render('shop/checkout', {
    pageTitle: "Checkout",
    path : "/checkout"
  })
}

exports.getOrders = (req,res,next) => {
  res.render('shop/orders', {
    pageTitle:"Orders",
    path:"/orders"
  })
}