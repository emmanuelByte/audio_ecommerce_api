const { validateData } = require("../helpers/helper");
const categoryModel = require("../model/category.model");

async function createCategory(req, res) {
  try {
    const { name, subCategory } = req.body;
    const keys = ["name"];
    const validate = validateData(req.body, keys);
    if (validate.error === true) {
      return res
        .status(400)
        .json({ message: `${validate.key} ${validate.message}` });
    }

    const category = new categoryModel({
      name,
      subCategory,
    });
    await category.save();
    res.status(200).json({
      message: "category created successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllCategory(req, res) {
  try {
    const categories = await categoryModel.find();
    res.status(200).json({
      message: "category fetch successfully",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createCategory,
  getAllCategory,
};
