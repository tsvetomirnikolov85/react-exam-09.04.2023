import "./AddRecipe.css";
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
  return (
    <div className="form">
      <h2>Add Recipe</h2>
      <form className="create-form" method="POST" onSubmit={onSubmit}>
        <input type="text" onChange={changeHandler} name="title" id="title" placeholder="Title" value={values.title} />
        <input type="text" onChange={changeHandler} name="imageUrl" id="product-image" placeholder="Image" value={values.imageUrl} />
        <p className="info">Please enter every product separated by comma ","</p>
        <textarea
          id="product-description"
          onChange={changeHandler}
          name="products"
          placeholder="Products"
          rows="5"
          cols="50"
          value={values.products}></textarea>
        <textarea
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
