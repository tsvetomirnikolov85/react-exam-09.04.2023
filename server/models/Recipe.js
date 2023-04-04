const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, "Title must be at least 5 characters long"],
    maxLength: [100, "The title should't be longer than 30 characters"],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  products: [
    {
      type: String,
      requires: true,
      minlength: [10, "Products field must be at least 10 characters long"],
      maxlength: [100, "Products field can't be longer than 100 characters"],
    },
  ],
  description: [
    {
      type: String,
      minlength: [10, "Description field must be at least 10 characters long"],
      maxlength: [100, "Description field can't be longer than 100 characters"],
    },
  ],
  // owner: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "User",
  // },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
