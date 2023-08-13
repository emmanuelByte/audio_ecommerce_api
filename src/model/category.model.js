const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", CategorySchema);
