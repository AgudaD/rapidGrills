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
    name: "Chicken Bucket",
    price: 10000,
    image: "https://www.pngkit.com/png/full/14-149399_fried-chicken-bucket-of-chicken-png.png",
  },
  {
    id: 5,
    name: "Sandwich",
    price: 3500,
    image: "https://fruits2go.ng/wp-content/uploads/2022/06/club-sandwitch.png",
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
    image: "",
  },
  {
    id: 7,
    name: "Salad",
    price: 2500,
    image: "",
  },
  {
    id: 7,
    name: "Hotdog",
    price: 2500,
    image: "",
  },
  {
    id: 7,
    name: "Hotdog",
    price: 2500,
    image: "",
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
          <div className="shadow-md drop-shadow-md rounded-md mb-10 flex items-center gap-5">
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
