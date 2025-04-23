import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipesContext } from "../contexts/RecipesContext";
import { FavoritesContext } from "../contexts/FavoritesContext";

function RecipeDetail() {
  const { id } = useParams();
  const { recipes } = useContext(RecipesContext);
  const { favorites, addToFavorites } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === Number(id));
  const isAlreadyFavorite = favorites.some((r) => r.id === recipe?.id);

  if (!recipe) return <p>Loading...</p>;

  const handleAdd = () => {
    addToFavorites(recipe);
    navigate("/favorites");
  };

  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} width="200" />
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <button onClick={handleAdd} disabled={isAlreadyFavorite}>
        {isAlreadyFavorite ? "Already in Favorites" : "Save to Favorites"}
      </button>
    </div>
  );
}

export default RecipeDetail;