import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MinusCircle, PlusCircle } from "phosphor-react";

const Shops = ({ meals }) => {
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

      <div className="grid grid-flow-row-dense grid-cols-1 gap-4 px-6 py-4 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => {
          return (
            <div key={meal.id} className="">
              <div className="flex items-center justify-between gap-3 rounded-md p-3 shadow-lg drop-shadow-md">
                <div className="flex items-center gap-3">
                  <img
                    src={meal.image}
                    alt=""
                    className="h-[3.5rem] max-w-[5rem] md:h-[5rem] md:w-[7rem] lg:h-[4rem] lg:max-w-[5rem]"
                  />
                  <div>
                    <p className="md:text-xl">{meal.name}</p>
                    <p className="md:text-xl">${meal.price}</p>
                  </div>
                </div>
                <div className="flex max-w-[7rem] items-center justify-between gap-4">
                  <button className="rounded-full border border-[#e91e63] px-8 py-1.5 hover:bg-[#e91e6248] md:px-6 md:text-sm">
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-16 flex items-center justify-center">
        <button className="rounded-full border bg-[#e91e63] px-8 py-1.5 text-white hover:bg-[#e91e62bb] md:text-xl">
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
