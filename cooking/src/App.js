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
import { RecipeProvider } from "./contexts/RecipesContext";
import { Profile } from "./components/Profile/Profile";
import { RouteGuard } from "./components/common/RouteGuard";
import { RecipeOwner } from "./components/common/RecipeOwner";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <div id="main-container">
          <Header />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Recipes />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<RouteGuard />}>
                <Route path="/logout" element={<Logout />} />
                <Route path="/recipes/create" element={<AddRecipe />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/recipes/:recipeId" element={<Details />} />
                <Route path="/recipes/:recipeId/edit" element={
                  <RecipeOwner>
                    <EditRecipe />
                  </RecipeOwner>
                } />
              </Route>
            </Routes>
          </main>
        </div>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;
