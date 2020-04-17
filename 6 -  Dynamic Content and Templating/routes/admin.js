const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../helpers/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render('add-product', { docTitle : "Add Product", path: '/admin/add-product'})
});

// Filters the url to only show for post requests
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
