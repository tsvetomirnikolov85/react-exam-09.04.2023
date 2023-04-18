import "./Profile.css"
import { useAuthContext } from "../../contexts/AuthContext"
import { MyRecipe } from "../Recipes/MyRecipe/MyRecipe"
import { useRecipeContext } from "../../contexts/RecipesContext";

export const Profile = () => {
    const { user } = useAuthContext();
    const { recipes } = useRecipeContext();
    const myRecipe = recipes.filter(x => x.ownerId === user._id)

    return (
        <>
            <div id="profile-container">
                <img id="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCb4DonWw5pT1-A3Su9HzG6TTN4nMOmj7tg&usqp=CAU" alt="" />
                <div id="profile-info">
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Town: {user.town}</p>
                    <p>Recipes: {myRecipe.length}</p>
                </div>
            </div>
            <div id="my-recipe-container">
                {
                    myRecipe.map((x) => <MyRecipe  {...x} />)
                }


            </div>
        </>
    )
}
