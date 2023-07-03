import { Link } from "react-router-dom";


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

const Grid = () => {
  return (
    <div className="grid grid-cols-3 gap-3 grid-flow-row-dense">
      {meals.map((meal) => {
        return(
          <div key={meal.id} className="shadow-lg drop-shadow-md rounded-md">
            <div className="bg-red-300">
              <p>hello</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Grid;
