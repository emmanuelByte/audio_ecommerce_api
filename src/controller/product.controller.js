const { validateData } = require("../helpers/helper");
const categoryModel = require("../model/category.model");
const productModel = require("../model/product.model");

async function createProduct(req, res) {
  try {
    const { name, description, quantity, price, categoryId } = req.body;
    const keys = ["name", "description", "quantity", "price", "categoryId"];
    const validate = validateData(req.body, keys);
    if (validate.error === true) {
      return res
        .status(400)
        .json({ message: `${validate.key} ${validate.message}` });
    }
    const category = await categoryModel.findOne({ _id: categoryId });
    if (!category) res.status(400).json({ message: "category does not exist" });

    const product = new productModel({
      name,
      description,
      quantity,
      price,
      category: category._id,
    });
    await product.save();
    res.status(200).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await productModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Product fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createProduct,
  getAllProducts,
};
