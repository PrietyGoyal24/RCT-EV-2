import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipesContext } from "../contexts/RecipesContext";

function RecipesList() {
  const { recipes } = useContext(RecipesContext);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p style={{ textAlign: "center" }}>Loading recipes...</p>
      ) : (
        recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>Difficulty: {recipe.difficulty}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipesList;