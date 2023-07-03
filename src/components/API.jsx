import { useState, useEffect } from "react";


const API = () => {

  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const data = await api.json();
    console.log(data);
  };

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center space-y-5 p-4">
      yeah, hello
    </div>
  );
};

export default API;
