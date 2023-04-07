import "./Details.css";
import { useEffect, useState } from 'react';
import { recipeServiceFactory } from '../../services/recipeService';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useRecipeContext } from "../../contexts/RecipesContext"

export const Details = () => {
  const [recipe, setRecipe] = useState([]);
  const { recipeId } = useParams();
  const recipeService = recipeServiceFactory()
  const { userId, isAuthenticated } = useAuthContext();
  const { deleteRecipe } = useRecipeContext();
  const navigate = useNavigate();
  const isOwner = userId === recipe?.ownerId

  useEffect(() => {
    recipeService.getOne(recipeId)
      .then((result) => {
        setRecipe(result[0]);
      })
  }, [recipeId]);

  return (
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src={recipe.imageUrl} alt="" />
        <h1 id="details-title">{recipe.title}</h1>

        <div id="info-wrapper">
          <h3>
            Coocked: <span id="cooked">{recipe.cooked}</span> times.
          </h3>

          <div id="products-description">
            <h1 id="products-title">PRODUCTS</h1>
            <ul className="products-list">
              {
                recipe.products?.map(x => <li>{x}</li>)
              }
            </ul>
          </div>
          <div id="details-description">
            <h1 id="details-title">COOKING METHOD</h1>

            <span>
              {recipe.description}
            </span>
          </div>
        </div>

        {isAuthenticated &&
          <div id="action-buttons">
            {
              isOwner && (
                <>
                  <Link to={`/recipes/${recipeId}/edit`} className="user-btn">
                    Edit
                  </Link>
                  <Link to="" className="user-btn">
                    Delete
                  </Link>
                </>
              )
            }
            <Link to="" id="guest-btn">
              Cook Now
            </Link>
          </div>
        }
      </div>
    </section>
  );
};
