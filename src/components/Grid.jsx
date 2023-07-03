import { Link } from "react-router-dom";

import atikah from "../assets/atikah.svg";
import foodbag from "../assets/foodbag.svg";
import groceries from "../assets/groceries.svg";
import martImages from "../assets/martImages.svg";

const Grid = () => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 gap-x-2 gap-y-3 px-6 py-4 md:grid-cols-2">
      <div className="flex items-center justify-between rounded-md bg-pink-600 px-3 py-6 text-white md:col-span-2">
        <div className="mt-12">
          <p className="text-base font-semibold md:text-2xl">Food Delivery</p>
          <p className="text-sm md:text-lg">order food you love</p>
        </div>
        <img src={atikah} alt="" className="w-32 md:w-48" />
      </div>

      <div className="flex flex-col justify-around rounded-md bg-[#FCD077] p-3 md:row-span-2">
        <img src={martImages} alt="" />
        <div>
          <p className="text-base font-semibold md:text-2xl">Pandamart</p>
          <p className="w-24 text-sm md:text-lg">Everyday up to 20% off</p>
        </div>
      </div>

      <div className="relative rounded-md bg-pink-300 p-4">
        <div className="mt-14 md:mt-24">
          <p className="text-base font-semibold md:text-2xl">Pick-Up</p>
          <p className="text-sm  md:text-lg">Everyday up to 25% off</p>
        </div>
        <img
          src={foodbag}
          alt=""
          className="absolute right-0 top-0 w-[5rem] md:w-[8rem]"
        />
      </div>

      <Link to={"/shop"} className="relative rounded-md bg-blue-300 p-3">
        <div>
          <div className="mt-4 md:mt-16">
            <p className="text-base font-semibold md:text-2xl">Shops</p>
            <p className="text-sm  md:text-lg">Grocery and more</p>
          </div>
          <img
            src={groceries}
            alt=""
            className="absolute right-0 top-0  w-[3rem] md:w-[6rem]"
          />
        </div>
      </Link>
    </div>
  );
};

export default Grid;
