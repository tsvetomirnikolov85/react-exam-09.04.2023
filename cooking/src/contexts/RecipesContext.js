import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { recipeServiceFactory } from "../services/recipeService";
import { useAuthContext } from "./AuthContext";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const recipeService = recipeServiceFactory();
  const { userId } = useAuthContext();

  useEffect(() => {
    recipeService.getAll().then((result) => {
      setRecipes(result);
    });
  }, []);

  const onCreateRecipeSubmit = async (data) => {
    let products = data.products;
    products = products.split(",").map(x => x.trim());
    data.products = products;
    const recipe = Object.assign(data, { ["ownerId"]: userId, ["cooked"]: 0 });
    try {
      const newRecipe = await recipeService.create(recipe);
      setRecipes((state) => [...state, newRecipe]);
    } catch (error) {
      throw new Error(error._message);
    }
    navigate("/");
  };

  const onEditRecipeSubmit = async (data) => {
    let products = data.products;
    products = products.split(",").map(x => x.trim())
    data.products = products;
    const result = await recipeService.edit(data._id, data);
    setRecipes((state) => state.map((x) => (x._id === data._id ? result : x)));
    navigate(`/recipes/${data._id}`);
  };


  const deleteRecipe = (recipeId) => {
    setRecipes((state) => state.filter((recipe) => recipe._id !== recipeId));
  };

  const getRecipe = (recipeId) => {
    return recipes.find((recipe) => recipe._id === recipeId);
  };

  const contextValues = {
    recipes,
    onCreateRecipeSubmit,
    onEditRecipeSubmit,
    deleteRecipe,
    getRecipe,
  };

  return <RecipeContext.Provider
    value={contextValues}>
    {children}
  </RecipeContext.Provider>;
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);

  return context;
};
