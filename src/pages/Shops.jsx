import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MinusCircle, PlusCircle } from "phosphor-react";

const meals = [
  {
    id: 1,
    name: "Burger",
    price: 8.61,
    image:
      "https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png",
  },
  {
    id: 2,
    name: "Tacos",
    price: 3.49,
    image:
      "https://deltaco.com/files/menu/item/DEL-276_Promo-5-Website-Images_Hero_The-Del-Taco_860x480.png?v=4.027",
  },
  {
    id: 3,
    name: "Pizza",
    price: 17.81,
    image:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_1200x630_crop_center-center_82_none/Bronco.png?mtime=1617398245",
  },
  {
    id: 4,
    name: "Chicken Wings",
    price: 20,
    image: "https://pngimg.com/d/kfc_food_PNG40.png",
  },
  {
    id: 5,
    name: "Sandwich",
    price: 7.59,
    image: "https://www.menudrive.com/wp-content/uploads/2021/02/Sandwich.png",
  },
  {
    id: 6,
    name: "Shawarma",
    price: 10,
    image:
      "https://doner-chi.ca/wp-content/uploads/2022/04/Turkish-Shawarma.png",
  },
  {
    id: 7,
    name: "Hotdog",
    price: 3.95,
    image:
      "https://assets.website-files.com/603372273fbc1306f1583eab/60364be6e775f2349bb6dbad_cheerleaders-hotdogs-got-the-flava.png",
  },
  {
    id: 8,
    name: "Salad",
    price: 4.25,
    image:
      "https://images.ctfassets.net/l5fkpck1mwg3/7DzLQK4fxXHEaMRLjS6Taf/c9ad552a443f0af7888222b3738cc417/Chicken_Caesar_Salad.png",
  },
  {
    id: 9,
    name: "Milkshake",
    price: 7.29,
    image:
      "https://zalimfoods.com/wp-content/uploads/2023/03/New-Project-45.png",
  },
  {
    id: 10,
    name: "Fries",
    price: 5,
    image:
      "https://images.ctfassets.net/l5fkpck1mwg3/5Ih3U85mGJXFzfQrfe9yP4/334041e07865621f88f687c6a5291463/Appetizers_French_Fries.png",
  },
];

const Shops = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex items-center gap-4 rounded-sm p-6 shadow-lg drop-shadow-2xl">
        <Link to={"/"}>
          <ArrowLeft size={32} color="#e91e63" className="" />
        </Link>
        <div>
          <p className="text-lg">Shop</p>
          <p className="-mt-2 text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 grid-flow-row-dense px-6 py-4 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => {
          return(
            <div key={meal.id} className="">
              <div className="shadow-lg drop-shadow-md rounded-md flex justify-between items-center gap-3 p-3">
                <div className="flex items-center gap-3">
                  <img src={meal.image} alt="" className="max-w-[5rem] h-[3.5rem] md:w-[7rem] md:h-[5rem] lg:max-w-[5rem] lg:h-[3.5rem]" />
                  <div>
                    <p className="md:text-xl">{meal.name}</p>
                    <p className="md:text-xl">${meal.price}</p>
                  </div>
                </div>
                <div className="flex max-w-[7rem] items-center justify-between gap-4">
                <button className="rounded-full border border-[#e91e63] px-8 py-1.5 hover:bg-[#e91e6248] md:text-sm md:px-6">
                  Add
                </button>
              </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center my-16">
          <button className="rounded-full border bg-[#e91e63] px-8 py-1.5 text-white md:text-xl hover:bg-[#e91e62bb]">
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
