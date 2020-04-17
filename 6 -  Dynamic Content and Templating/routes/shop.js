const express = require("express");
const router = express.Router();
const path = require('path');
const rootDir = require("../helpers/path");
const adminData = require('./admin')

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods : products, docTitle : "My Shop", path : '/'});
});

module.exports = router;
