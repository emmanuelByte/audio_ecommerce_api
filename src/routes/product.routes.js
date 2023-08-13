const { Router } = require("express");
const { verifyAuthToken } = require("../middleware/authenticate");
const {
  createProduct,
  getAllProducts,
} = require("../controller/product.controller");

const productRouter = Router();

// AUTH Token
productRouter.post("/create", verifyAuthToken, createProduct);

productRouter.get("/all", getAllProducts);

module.exports = productRouter;
