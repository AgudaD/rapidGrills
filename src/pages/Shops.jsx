import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MinusCircle, PlusCircle, X } from "phosphor-react";
import axios from "axios";
import beefBurger from '../assets/beefBurger.jpg'

const meals = [
  {
    id: 1,
    name: "Burger",
    price: 30,
    image: "https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png",
  },
  {
    id: 2,
    name: "Tacos",
    price: 10,
    image: "https://assets.stickpng.com/images/58727fc4f3a71010b5e8ef0a.png",
  },
  {
    id: 3,
    name: "Jollof Rice & Chicken",
    price: 2000,
    image: "https://toppng.com/uploads/thumbnail/jollof-rice-plate-of-jollof-rice-11562865062wdozywc6js.png",
  },
  {
    id: 4,
    name: "Chicken Wings",
    price: 10000,
    image: "https://pngimg.com/d/kfc_food_PNG40.png",
  },
  {
    id: 5,
    name: "Sandwich",
    price: 3500,
    image: "https://www.menudrive.com/wp-content/uploads/2021/02/Sandwich.png",
  },
  {
    id: 6,
    name: "Shawarma",
    price: 3000,
    image: "https://doner-chi.ca/wp-content/uploads/2022/04/Turkish-Shawarma.png",
  },
  {
    id: 7,
    name: "Hotdog",
    price: 2500,
    image: "https://assets.website-files.com/603372273fbc1306f1583eab/60364be6e775f2349bb6dbad_cheerleaders-hotdogs-got-the-flava.png",
  },
  {
    id: 8,
    name: "Salad",
    price: 2500,
    image: "https://images.ctfassets.net/l5fkpck1mwg3/7DzLQK4fxXHEaMRLjS6Taf/c9ad552a443f0af7888222b3738cc417/Chicken_Caesar_Salad.png",
  },
  {
    id: 9,
    name: "Milkshake",
    price: 2500,
    image: "https://zalimfoods.com/wp-content/uploads/2023/03/New-Project-45.png",
  },
  {
    id: 10,
    name: "Fries",
    price: 2500,
    image: "https://images.ctfassets.net/l5fkpck1mwg3/5Ih3U85mGJXFzfQrfe9yP4/334041e07865621f88f687c6a5291463/Appetizers_French_Fries.png",
  },
];

const Shops = () => {
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

      {meals.map((meal) => (
        <div key={meal.id} className="mt-5 px-6">
          <div className="shadow-md drop-shadow-md rounded-md mb-10 flex items-center gap-5 p-4">
            <img src={meal.image} alt="" className="w-[10rem]" />
            <div>
              <p>{meal.name}</p>
              <p>${meal.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shops;


 // const [data, setData] = useState([]);
  // const [count, setCount] = useState(0);
  // const [image, setImage] = useState();

  // useEffect(() => {
  //   getApiData();
  // }, []);

  // const getApiData = async () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://api.spoonacular.com/food/menuItems/random?apiKey=f530be95bab249d4b8a4dc15ef832fb7",
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //     setData(response.data.title);
  //     setImage(response.data.images[0])
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

{
  /* {data.map((pizza) => (
        <div key={pizza.id} className="shadow-md drop-shadow-md rounded-t-md">
            <img src={pizza.img} alt="" className="rounded-t-md" />
          <div className="p-2 mt-5 flex justify-between items-start">
            <div>
              <p>{pizza.name}</p>
              <p>${pizza.price}</p>
            </div>
            <div className="flex justify-between items-center gap-4 max-w-[7rem]">
          <MinusCircle onClick={() => {setCount(count - 1)}} />
          <p>{count}</p>
          <PlusCircle onClick={() => {setCount(count + 1)}} />
        </div>
          </div>
        </div>
      ))} */
}
