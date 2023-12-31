import foodbag from "../assets/foodbag.svg";
import groceries from "../assets/groceries.svg";
import martImages from "../assets/martImages.svg";
import { Link } from "react-router-dom";

const LocateRestaurant = () => {
  return (
    <div className="mt-8">
      

      <div className="mt-10 grid grid-flow-row-dense grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-2">
        <Link to={"/mart"} className="flex flex-col justify-around rounded-md bg-[#FCD077] p-3 md:row-span-2">
          <div>
            <img src={martImages} alt="" className="w-full" />
            <div>
              <p className="text-base font-semibold md:text-2xl">Pandamart</p>
              <p className="w-24 text-sm md:text-lg">Everyday up to 20% off</p>
            </div>
          </div>
        </Link>

        <Link to={"/pickup"} className="relative rounded-md bg-pink-300 p-4">
          <div className="relative rounded-md bg-pink-300 p-4">
            <div className="mt-14 md:mt-24 lg:mt-56">
              <p className="text-base font-semibold md:text-2xl">Pick-Up</p>
              <p className="text-sm  md:text-lg">Everyday up to 25% off</p>
            </div>
            <img
              src={foodbag}
              alt=""
              className="absolute right-0 top-0 w-[5rem] md:w-[8rem] lg:w-[10rem]"
            />
          </div>
        </Link>

        <Link to={"/shop"} className="relative rounded-md bg-blue-300 p-3">
          <div>
            <div className="mt-4 md:mt-16 lg:mt-56">
              <p className="text-base font-semibold md:text-2xl">Shops</p>
              <p className="text-sm  md:text-lg">Grocery and more</p>
            </div>
            <img
              src={groceries}
              alt=""
              className="absolute right-0 top-0 w-[3rem] md:w-[6rem] lg:w-[10rem]"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LocateRestaurant;
