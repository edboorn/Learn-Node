const express = require("express");
const router = express.Router();
const path = require("path");

const adminController = require('../controllers/admin')


router.get("/add-product", adminController.getAddProduct );

router.get("/admin-products", adminController.getAdminProducts);
// Filters the url to only show for post requests
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
