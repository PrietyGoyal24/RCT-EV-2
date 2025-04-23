import React, { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <p>You have no favorite recipes yet.</p>;
  }

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <p>Cuisine: {recipe.cuisine}</p>
          <button onClick={() => removeFromFavorites(recipe.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;