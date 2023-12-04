const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");
const shopProducts = require("../controllers/products");

const router = express.Router();

router.get("/", shopProducts.getProducts);

module.exports = router;
