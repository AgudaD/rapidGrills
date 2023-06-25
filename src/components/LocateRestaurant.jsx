import search from "../assets/Search.gif";
import atikah from '../assets/atikah.png'
import fishnchips from '../assets/fishnchips.png'
import foodbag from '../assets/foodbag.png'
import groceries from '../assets/groceries.png'
import martImages from '../assets/martImages.png'

const LocateRestaurant = () => {
  return (
    <div className="mt-8">
      <div className="relative">
        <input
          type="search"
          placeholder="Search restaurant"
          className="w-full rounded-lg px-12 py-1.5 shadow-xl drop-shadow-md outline-none cursor-pointer"
        />
        <img src={search} alt="" className="absolute left-1.5 top-1.5 w-6" />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="flex justify-between items-center col-span-2 rounded-md bg-pink-600 px-3 py-6 text-white">
          <div className="mt-12">
            <p className="text-base font-semibold md:text-2xl">Food Delivery</p>
            <p className="text-sm md:text-lg">order food you love</p>
          </div>
          <img src={atikah} alt="" className="w-32 md:w-48" />
        </div>
        <div className="flex flex-col justify-around row-span-2 rounded-md bg-[#FCD077] p-3">
          <img src={martImages} alt="" />
          <div>
            <p className="text-base font-semibold md:text-2xl">Pandamart</p>
            <p className="text-sm w-24 md:text-lg">Everyday up to 20% off</p>
          </div>
        </div>

        <div className="relative rounded-md bg-pink-300 p-4">
          <div className="mt-14">
          <p className="text-base font-semibold md:text-2xl">Pick-Up</p>
          <p className="text-sm  md:text-lg">Everyday up to 25% off</p>
          </div> 
          <img src={foodbag} alt="" className="absolute top-0 right-0 w-16" />
        </div>

        <div className="relative rounded-md bg-blue-300 p-3">
          <div className="mt-4">
          <p className="text-base font-semibold md:text-2xl">Shops</p>
          <p className="text-sm  md:text-lg">Grocery and more</p>
          </div>
          <img src={groceries} alt="" className="absolute top-0 right-0" />
        </div>
      </div>
    </div>
  );
};

export default LocateRestaurant;
