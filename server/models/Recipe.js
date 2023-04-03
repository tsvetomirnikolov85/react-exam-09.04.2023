const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, "Title must be at least 5 characters long"],
    maxLength: [30, "The title should't be longer than 30 characters"],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: [],
  commentList: [],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  ownerName: {
    type: String,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
