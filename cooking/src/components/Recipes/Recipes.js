import "./Recipes.css";
import { Recipe } from "./Recipe/Recipe";
import { useRecipeContext } from "../../contexts/RecipesContext";

export const Recipes = () => {
    const { recipes } = useRecipeContext();
    return (

        <section className="container">
            {
                recipes.map((x) => <Recipe key={Math.random()} {...x} />)
            }

            {recipes.length === 0 && (
                <h2 className="no-recipes">No recipes yet</h2>
            )}
        </section>
    )

}
