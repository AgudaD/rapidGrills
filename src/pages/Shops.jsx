import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "phosphor-react";
import axios from "axios";
import pizza from "../assets/pizza.svg";

const Shops = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [titles, setTitles] = useState("");

  
  const getOrder = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "dfce745ee1mshbd7ab296d75bc4ep129daejsnf3f9823f056f",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const results = await response.json();
      console.log(results);

      setTitles(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="flex items-center gap-4 rounded-sm p-6 shadow-lg drop-shadow-2xl">
        <Link to={"/"}>
          <X size={32} color="#e91e63" className="" />
        </Link>
        <div>
          <p className="text-lg">Shop</p>
          <p className="-mt-2 text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="px-8">
        <div className="mt-20 flex items-center justify-between px-6 py-3 shadow-md">
          <div className="flex items-center gap-6">
            <img src={pizza} alt="food" className="w-16" />
            <div>
              <p>${title}</p>
            </div>
          </div>
          <div>
            <button
              className="rounded-md border border-[#e91e63] px-6 py-1 hover:bg-[#e91e6231]"
              onClick={getOrder}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
