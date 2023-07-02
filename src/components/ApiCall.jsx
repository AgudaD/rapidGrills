import axios from "axios";
import { useState, useEffect } from "react";

const ApiCall = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const options = {
      method: "GET",
      url: "https://pizza-and-desserts.p.rapidapi.com/pizzas",
      headers: {
        "X-RapidAPI-Key": "fff32a5542mshb22131aba880a7fp11d0ccjsnc40d293afe2d",
        "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      {data.map((pizza) => (
        <div key={pizza.id}>
            <img src={pizza.img} alt="" />
          <div>
            <p>{pizza.name}</p>
            <p>${pizza.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiCall;
