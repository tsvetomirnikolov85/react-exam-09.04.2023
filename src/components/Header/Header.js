import "./Header.css";

export const Header = () => {
  return (
    <nav class="navbar">
      <div class="logo">
        <a href="#">
          <h1>Shop & Fun</h1>
        </a>
      </div>
      <ul class="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Catalog</a>
        </li>
        <li>
          <a href="#">Add Product</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
      </ul>
    </nav>
  );
};
