import "./EditRecipe.css";

export const EditRecipe = () => {
  return (
    <div class="form">
      <h2>Edit Recipe</h2>
      <form class="create-form">
        <input type="text" name="title" id="title" placeholder="Product Name" />
        <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
        <p className="info">Please enter every product separated by comma ","</p>
        <textarea id="product-description" name="products" placeholder="Products" rows="5" cols="50"></textarea>
        <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
