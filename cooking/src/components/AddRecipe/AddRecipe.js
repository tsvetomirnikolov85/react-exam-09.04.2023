import "./AddRecipe.css";
import { useState } from "react";

export const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [products, setProducts] = useState("");
  const [desription, setDescription] = useState("");

  function onTitleChange(e) {
    setTitle(e.target.value);
  }
  function onImageUrlChange(e) {
    setImageUrl(e.target.value);
  }

  function onProductsChange(e) {
    setProducts(e.target.value);
  }

  function onDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function onAddRecipeSubmit(e) {
    e.preventDefault();
    console.log(title);
    console.log(imageUrl);
    console.log(products);
    console.log(desription);
  }

  return (
    <div className="form">
      <h2>Add Recipe</h2>
      <form className="create-form" method="POST" onSubmit={onAddRecipeSubmit}>
        <input type="text" onChange={onTitleChange} name="title" id="title" placeholder="Title" value={title} />
        <input type="text" onChange={onImageUrlChange} name="imageUrl" id="product-image" placeholder="Product Image" value={imageUrl} />
        <p className="info">Please enter every product separated by comma ","</p>
        <textarea
          id="product-description"
          onChange={onProductsChange}
          name="products"
          placeholder="Products"
          rows="5"
          cols="50"
          value={products}></textarea>
        <textarea
          id="recipe-description"
          onChange={onDescriptionChange}
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          value={desription}></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
