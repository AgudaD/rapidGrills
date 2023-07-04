import React, { useContext } from "react";
import ShopContext from "../../context/ShopContext";

const Meals = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { id, name, price, image } = props.data;
  return (
    <div>
      <div>
        <div className="flex items-center justify-between gap-3 rounded-md p-3 shadow-lg drop-shadow-md">
          <div className="flex items-center gap-3">
            <img
              src={image}
              alt=""
              className="h-[3.5rem] max-w-[5rem] md:h-[5rem] md:w-[7rem] lg:h-[4rem] lg:max-w-[5rem]"
            />
            <div>
              <p className="md:text-xl">{name}</p>
              <p className="md:text-xl">${price}</p>
            </div>
          </div>
          <div className="flex max-w-[7rem] items-center justify-between gap-4">
            <button
              className="rounded-full border border-[#e91e63] px-8 py-1.5 hover:bg-[#e91e6248] md:px-6 md:text-sm"
              onClick={() => addToCart(id)}
            >
              Add
            </button>
          </div>
          <div>{/* <Counter meals={meals} /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
