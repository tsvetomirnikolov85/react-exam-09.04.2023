import "./AddRecipe.css";
import { useState } from "react";
import { useRecipeContext } from "../../contexts/RecipesContext";
import { useForm } from "../../hooks/useForm";

export const AddRecipe = () => {
  const { onCreateRecipeSubmit } = useRecipeContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      title: "",
      imageUrl: "",
      products: "",
      description: "",
    },
    onCreateRecipeSubmit
  );
  const [titleError, setTitleError] = useState(false);
  const [imageUrlError, setImageUrlError] = useState(false);
  const [productsError, setproductsError] = useState(false);
  const [descriptionError, setdescriptionError] = useState(false);

  function checkTitle() {
    if (values.title.length < 4) {
      setTitleError(true)
    } else {
      setTitleError(false)
    }
  }

  function checkImgUrl() {
    if (!values.imageUrl.trim().startsWith("http")) {
      setImageUrlError(true)
    } else {
      setImageUrlError(false)
    }
  }

  function checkProducts() {
    if (values.products.length < 10) {
      setproductsError(true)
    } else {
      setproductsError(false)
    }
  }

  function checkDescription() {
    if (values.description.length < 4) {
      setdescriptionError(true)
    } else {
      setdescriptionError(false)
    }
  }
  return (
    <div className="form">
      <h2>Add Recipe</h2>
      <form className="create-form" method="POST" onSubmit={onSubmit}>
        {
          titleError && <p className="username-error">title must be at least 4 characters long</p>
        }
        <input type="text" onChange={changeHandler} onBlur={checkTitle} name="title" id="title" placeholder="Title" value={values.title} />
        {
          imageUrlError && <p className="username-error">image must start whith "http"</p>
        }
        <input type="text" onChange={changeHandler} onBlur={checkImgUrl} name="imageUrl" id="product-image" placeholder="Image" value={values.imageUrl} />
        <p className="info">Please enter every product separated by comma ","</p>
        {
          productsError && <p className="username-error">products field must be at least 4 characters long</p>
        }
        <textarea
          onBlur={checkProducts}
          id="product-description"
          onChange={changeHandler}
          name="products"
          placeholder="Products"
          rows="5"
          cols="50"
          value={values.products}></textarea>
        {
          descriptionError && <p className="username-error">description field must be at least 4 characters long</p>
        }
        <textarea
          onBlur={checkDescription}
          id="recipe-description"
          onChange={changeHandler}
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          value={values.description}></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
