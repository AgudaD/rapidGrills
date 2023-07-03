import { useState, useEffect } from "react";
import config from "../config";

const API = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${config.apiKey}&number=10`
      );

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      const data = await api.json();
      setPopular(data.recipes);
    }
  };

  return (
    <div className="flex min-h-screen w-screen flex-col items-center space-y-5 p-4">
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default API;
