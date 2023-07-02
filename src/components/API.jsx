import { useState, useEffect } from "react";
import axios from "axios";


const API = () => {
  const [data, setData] = useState([]);

  const getFood = async () => {
    const options = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
      params: {
        "nutrition-type": "cooking",
        "category[0]": "generic-foods",
        "health[0]": "alcohol-free",
      },
      headers: {
        "X-RapidAPI-Key": "dfce745ee1mshbd7ab296d75bc4ep129daejsnf3f9823f056f",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.hints);
      setData(response.data.hints)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    getFood();

  }, []);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center space-y-5 p-4">
      {data.map((post) => (
        <div key={post.food.foodId} className="bg-white flex items-center gap-4 shadow-md drop-shadow-lg w-full">
          <img src={post.food.image} alt="" />
          <p className="text-3xl font-semibold">{post?.food.category}</p>
        </div>
        ))}
    </div>
  );
};

export default API;
