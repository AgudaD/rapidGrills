import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MinusCircle, PlusCircle, X } from "phosphor-react";
import config from "../config";

// const meals = [
//   {
//     id: 1,
//     name: "Burger",
//     price: 8.61,
//     image:
//       "https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png",
//   },
//   {
//     id: 2,
//     name: "Tacos",
//     price: 3.49,
//     image:
//       "https://deltaco.com/files/menu/item/DEL-276_Promo-5-Website-Images_Hero_The-Del-Taco_860x480.png?v=4.027",
//   },
//   {
//     id: 3,
//     name: "Pizza",
//     price: 17.81,
//     image:
//       "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_1200x630_crop_center-center_82_none/Bronco.png?mtime=1617398245",
//   },
//   {
//     id: 4,
//     name: "Chicken Wings",
//     price: 20,
//     image: "https://pngimg.com/d/kfc_food_PNG40.png",
//   },
//   {
//     id: 5,
//     name: "Sandwich",
//     price: 7.59,
//     image: "https://www.menudrive.com/wp-content/uploads/2021/02/Sandwich.png",
//   },
//   {
//     id: 6,
//     name: "Shawarma",
//     price: 10,
//     image:
//       "https://doner-chi.ca/wp-content/uploads/2022/04/Turkish-Shawarma.png",
//   },
//   {
//     id: 7,
//     name: "Hotdog",
//     price: 3.95,
//     image:
//       "https://assets.website-files.com/603372273fbc1306f1583eab/60364be6e775f2349bb6dbad_cheerleaders-hotdogs-got-the-flava.png",
//   },
//   {
//     id: 8,
//     name: "Salad",
//     price: 4.25,
//     image:
//       "https://images.ctfassets.net/l5fkpck1mwg3/7DzLQK4fxXHEaMRLjS6Taf/c9ad552a443f0af7888222b3738cc417/Chicken_Caesar_Salad.png",
//   },
//   {
//     id: 9,
//     name: "Milkshake",
//     price: 7.29,
//     image:
//       "https://zalimfoods.com/wp-content/uploads/2023/03/New-Project-45.png",
//   },
//   {
//     id: 10,
//     name: "Fries",
//     price: 5,
//     image:
//       "https://images.ctfassets.net/l5fkpck1mwg3/5Ih3U85mGJXFzfQrfe9yP4/334041e07865621f88f687c6a5291463/Appetizers_French_Fries.png",
//   },
// ];

const Shops = () => {
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

      {popular.map((recipe) => {
        return (
          <div key={recipe.id} className="mt-10 px-6">
            <div className="mb-10 flex items-center justify-between rounded-md p-4 shadow-md drop-shadow-md">
              <div className="flex items-center gap-5">
                <img src={recipe.image} alt="" className="w-[10rem]" />
                <div>
                  <p>{recipe.name}</p>
                  {/* <p>${recipe.price}</p> */}
                </div>
              </div>

              <div className="flex max-w-[7rem] items-center justify-between gap-4">
                <button className="rounded-full border border-[#e91e63] px-8 py-1.5 hover:bg-[#e91e6248]">
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mb-12 flex items-center justify-center">
        <button className="rounded-full bg-[#e91e63] px-16 py-1.5 text-white hover:bg-[#e91e62cb]">
          Proceed
        </button>
      </div>
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
