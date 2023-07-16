import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "phosphor-react";
import MartItems from "./MartItems";
import { martProducts } from "./../../martData";

const Mart = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between gap-4 rounded-sm p-6 border shadow-lg drop-shadow-2xl">
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <ArrowLeft size={32} color="#e91e63" className="" />
          </Link>
          <div>
            <p className="text-lg">Mart</p>
            <p className="-mt-2 text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <Link to={"/cart"}>
          <ShoppingCart size={24} color="#e91e63" />
        </Link>
      </div>

      <div className="mt-24 grid grid-flow-row-dense grid-cols-1 gap-4 px-6 py-4 md:grid-cols-2">
        {martProducts.map((martproduct) => (
          <MartItems data={martproduct} />
        ))}
      </div>

      <div className="px-6 my-6">
        <Link to={"/cart"}>
          <button className="w-full rounded-md bg-[#D60665] px-6 py-2 text-white hover:bg-[#e91e62de]">
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Mart;
