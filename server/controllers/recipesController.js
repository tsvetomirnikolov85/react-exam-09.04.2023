const router = require("express").Router();
const { isAuth } = require("../middlewares/guards");
const { getAll, getById, createRecipe, update, remove } = require("../services/recipeServices");

router.get("/", async (req, res) => {
  const recipes = await getAll();
  res.status(200).json(recipes);
});

router.post("/", async (req, res) => {
  let data = req.body;
  const recipe = await createRecipe(data);
  res.status(201).json(recipe);
});

router.get("/:recipeId", async (req, res) => {
  const recipe = await getById({ _id: req.params.recipeId });
  res.status(200).json(recipe);
});

router.put("/:recipeId", isAuth(), async (req, res) => {
  const data = req.body;
  id = req.params.recipeId;
  await update(id, data);
  res.status(200).json(updatedRecipe);
});
router.delete("/:recipeId", isAuth(), async (req, res) => {
  await remove({ _id: req.params.recipeId });
  res.status(200);
});

module.exports = router;
