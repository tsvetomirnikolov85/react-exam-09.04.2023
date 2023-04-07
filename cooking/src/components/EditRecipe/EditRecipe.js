import "./EditRecipe.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../../contexts/RecipesContext";
import { recipeServiceFactory } from "../../services/recipeService";


export const EditRecipe = () => {
  const { recipeId } = useParams();
  const { onEditRecipeSubmit } = useRecipeContext();
  const recipeService = recipeServiceFactory();
  const [recipe, setRecipe] = useState({});
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [products, setProducts] = useState("");
  const [description, setDescription] = useState("");
  const data = { _id: recipe._id, title, imageUrl, products, description };

  function onTitleChange(e) {
    setTitle(e.target.value);
  }
  function onImgUrlChange(e) {
    setImageUrl(e.target.value);
  }
  function onProductsChange(e) {
    setProducts(e.target.value);
  }
  function onDescriptionChange(e) {
    setDescription(e.target.value);
  }
  useEffect(() => {
    recipeService.getOne(recipeId)
      .then(result => {
        result = result[0];
        setRecipe(result);
        setTitle(result.title);
        setImageUrl(result.imageUrl);
        setProducts(result.products.join(','));
        setDescription(result.description);
      });
  }, [recipeId]);

  return (
    <div className="form">
      <h2>Edit Recipe</h2>
      <form className="create-form" method="POST" >
        <input type="text" name="title" id="title" placeholder="Product Name" value={title} onChange={onTitleChange} />
        <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" value={imageUrl} onChange={onImgUrlChange} />
        <p className="info">Please enter every product separated by comma ","</p>
        <textarea
          id="product-description"
          name="products"
          placeholder="Products"
          rows="5"
          cols="50"
          value={products}
          onChange={onProductsChange}></textarea>
        <textarea
          id="product-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          value={description}
          onChange={onDescriptionChange}></textarea>
        <button type="button" onClick={() => onEditRecipeSubmit(data)}>Edit</button>
      </form>
    </div>
  );
};
