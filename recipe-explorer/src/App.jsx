import React from "react";
import { Routes, Route } from "react-router-dom";
import RecipesList from "./pages/RecipesList";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipesList />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;