import { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data.recipes));
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes }}>
      {children}
    </RecipesContext.Provider>
  );
};