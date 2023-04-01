import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>Cook with Fun</h1>
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to="/">Recipes</Link>
        </li>
        <li>
          <Link to="/recipes/create">Add Recipe</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};
