import { Header } from "./components/Header/Header";
import { Recipes } from "./components/Recipes/Recipes";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AddRecipe } from "./components/AddRecipe/AddRecipe";
import { EditRecipe } from "./components/EditRecipe/EditRecipe";
function App() {
  return (
    <>
      <Header />
      <Recipes />
      <Login />
      <Register />
      <AddRecipe />
      <EditRecipe />
    </>
  );
}

export default App;
