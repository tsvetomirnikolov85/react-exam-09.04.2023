import { Header } from "./components/Header/Header";
import { Recipes } from "./components/Recipes/Recipes";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AddRecipe } from "./components/AddRecipe/AddRecipe";
import { EditRecipe } from "./components/EditRecipe/EditRecipe";
import { Details } from "./components/Details/Details";
import { Logout } from "./components/Logout/Logout";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div id="main-container">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Recipes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipes/create" element={<AddRecipe />} />
            <Route path="/recipes/edit" element={<EditRecipe />} />
            <Route path="/recipes/:recipeId" element={<Details />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
