import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "phosphor-react";
import Meals from "./Meals";
import { meals } from "../../mockData";

const Shops = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 rounded-sm p-6 shadow-lg drop-shadow-2xl">
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <ArrowLeft size={32} color="#e91e63" className="" />
          </Link>
          <div>
            <p className="text-lg">Shop</p>
            <p className="-mt-2 text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <Link to={"/cart"}>
          <ShoppingCart size={24} color="#e91e63" />
        </Link>
      </div>

      <div className="mt-10 grid grid-flow-row-dense grid-cols-1 gap-4 px-6 py-4 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => (
          <Meals data={meal} />
        ))}
      </div>
      <Link to={"/cart"}>
        <div className="my-16 flex items-center justify-center">
          <button className="rounded-full border bg-[#e91e63] px-8 py-1.5 text-white hover:bg-[#e91e62bb] md:text-xl">
            Proceed
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Shops;
