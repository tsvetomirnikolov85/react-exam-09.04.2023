import "./Header.css";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <h1>Cook with Fun</h1>
        </a>
      </div>
      <ul className="menu">
        <li>
          <a href="#">Recipes</a>
        </li>
        <li>
          <a href="#">Add Recipe</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
    </nav>
  );
};
