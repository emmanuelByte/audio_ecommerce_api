const { Router } = require("express");
const { verifyAuthToken } = require("../middleware/authenticate");
const {
  createCategory,
  getAllCategory,
} = require("../controller/category.controller");

const categoryRouter = Router();

// AUTH Token
categoryRouter.post("/create", verifyAuthToken, createCategory);
categoryRouter.get("/all", getAllCategory);

module.exports = categoryRouter;
