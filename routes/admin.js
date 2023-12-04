const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const adminProducts = require("../controllers/products");

// /admin/add-product => GET
router.get("/add-product", adminProducts.showProducts);

// /admin/add-product => POST
router.post("/add-product", adminProducts.addProducts);

exports.routes = router;
