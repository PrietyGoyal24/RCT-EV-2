import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <img src={recipe.image} alt={recipe.name} width="200" />
      <h3>{recipe.name}</h3>
      <p>Difficulty: {recipe.difficulty}</p>
      <Link to={`/recipe/${recipe.id}`}>View Details</Link>
    </div>
  );
}