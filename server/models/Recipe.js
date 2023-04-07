const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String },
  imageUrl: { type: String },
  products: Array,
  description: { type: String },
  owner: { type: String },
  cooked: { type: Number }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
