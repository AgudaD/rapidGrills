import search from "../assets/Search.gif";

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
        <div className="col-span-2 rounded-md bg-pink-600 px-3 py-6 text-white">
          <p>Food Delivery</p>
          <p className="text-sm ">order food you love</p>
        </div>
        <div className="row-span-2 rounded-md bg-orange-300 p-3">
          <p>Pandamart</p>
          <p className="text-sm ">Everyday up to 20% off</p>
        </div>
        <div className="rounded-md bg-pink-300 p-3">
          <p>Pick-Up</p>
          <p className="text-sm ">Everyday up to 25% off</p>
        </div>

        <div className="rounded-md bg-blue-300 p-3">
          <p>Shops</p>
          <p className="text-sm ">Grocery and more</p>
        </div>
      </div>
    </div>
  );
};

export default LocateRestaurant;
