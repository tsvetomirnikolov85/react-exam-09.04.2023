const router = require("express").Router();
const { isAuth } = require("../middlewares/guards");
const { getAll, getById, createRecipe, update, remove } = require("../services/recipeServices");

router.get("/", async (req, res) => {
  const recipes = await getAll();
  console.log(recipes);
  res.status(200).json(recipes);
});

router.post("/", isAuth(), async (req, res) => {
  let data = req.body;
  data = Object.assign(data, { ownerId: req.user._id });
  await createRecipe(data);
  res.status(201).json();
});

router.get("/:recipeId", async (req, res) => {
  const photo = await Photo.findById({ _id: req.params.photoId }).lean();
  const isCreator = photo.owner == req.user?._id;
  let lockComment;
  if (!isCreator && res.locals.isAuthenticated) {
    lockComment = true;
  }
});

router.put("/:recipeId", async (req, res) => {});
router.delete("/:recipeId", async (req, res) => {});

module.exports = router;
