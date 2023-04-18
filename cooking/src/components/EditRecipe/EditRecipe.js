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

  const [titleError, setTitleError] = useState(false);
  const [imageUrlError, setImageUrlError] = useState(false);
  const [productsError, setproductsError] = useState(false);
  const [descriptionError, setdescriptionError] = useState(false);

  function checkTitle() {
    if (title.length < 4) {
      setTitleError(true)
    } else {
      setTitleError(false)
    }
  }

  function checkImgUrl() {
    if (!imageUrl.trim().startsWith("http")) {
      setImageUrlError(true)
    } else {
      setImageUrlError(false)
    }
  }

  function checkProducts() {
    if (products.length < 10) {
      setproductsError(true)
    } else {
      setproductsError(false)
    }
  }

  function checkDescription() {
    if (description.length < 10) {
      setdescriptionError(true)
    } else {
      setdescriptionError(false)
    }
  }

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
        {
          titleError && <p className="username-error">title must be at least 4 characters long</p>
        }
        <input type="text" name="title" id="title" placeholder="Product Name" value={title} onChange={onTitleChange} onBlur={checkTitle} />
        {
          imageUrlError && <p className="username-error">image must start whith "http"</p>
        }
        <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" value={imageUrl} onChange={onImgUrlChange} onBlur={checkImgUrl} />
        <p className="info">Please enter every product separated by comma ","</p>
        {
          productsError && <p className="username-error">products field must be at least 10 characters long</p>
        }
        <textarea
          onBlur={checkProducts}
          id="product-description"
          name="products"
          placeholder="Products"
          rows="5"
          cols="50"
          value={products}
          onChange={onProductsChange}>
        </textarea>
        {
          descriptionError && <p className="username-error">description field must be at least 10 characters long</p>
        }
        <textarea
          onBlur={checkDescription}
          id="product-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          value={description}
          onChange={onDescriptionChange}>
        </textarea>
        <button type="button" onClick={() => onEditRecipeSubmit(data)}>Edit</button>
      </form>
    </div>
  );
};
