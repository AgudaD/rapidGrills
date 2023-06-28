import { useState, useEffect } from "react";
import axios from "axios";

// const URL = "https://jsonplaceholder.typicode.com/posts/2"

const API = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://pizza-and-desserts.p.rapidapi.com/pizzas")
      .then((response) => {
        setData(response.img);
      });
  }, []);

  return (
    <div className="flex w-screen flex-col items-center justify-center bg-blue-300">
      <img src={data} alt="photo of something" />
    </div>
  );
};

export default API;
