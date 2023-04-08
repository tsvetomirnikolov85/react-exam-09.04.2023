import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useRecipeContext } from "../../contexts/RecipesContext";

export const RecipeOwner = ({
    children,
}) => {
    const { recipeId } = useParams();
    const { getRecipe } = useRecipeContext();
    const { userId } = useAuthContext();

    const currentRecipe = getRecipe(recipeId);

    if (currentRecipe && currentRecipe.ownerId !== userId) {
        return <Navigate to={"/"} replace />
    }

    return children ? children : <Outlet />
};