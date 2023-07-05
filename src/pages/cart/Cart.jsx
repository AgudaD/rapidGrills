import CartTop from "../../components/CartTop";
import rider from "../../assets/rider.svg";
import { Bookmark } from "phosphor-react";
import { motion } from "framer-motion";
import { meals } from "../../mockData";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <CartTop />
      <div className="px-12 py-6">
        {meals.map((meal) => {
          if (cartItems[meal.id] !== 0) {
            return <CartItem data={meal} />;
          }
        })}
      </div>
      <hr className="bg-gray-600" />
      <div className="-mt-3 px-12 py-6 font-semibold">
        <div className="mb-5 flex items-center justify-between">
          <p>Total</p>
          <p>${totalAmount}</p>
        </div>
        <button className="w-full rounded-md bg-[#D60665] px-6 py-2 text-white hover:bg-[#e91e62de]">
          Place order
        </button>
      </div>
    </motion.div>
  );
};

export default Cart;

{
  /* <div className="flex items-center gap-10 p-3 shadow-md drop-shadow-lg">
          <img src={rider} alt="" />
          <div>
            <p className="text-sm">Estimated delivery</p>
            <p className="text-xl font-semibold">Now (30 min)</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="bg-gray-400 px-4 py-2 text-lg">1</p>
            <div>
              <p className="text-lg text-pink-500">Exclusive Subway Deal</p>
              <p className="text-sm text-gray-500">Chicken Teriyaki</p>
            </div>
          </div>
          <p className="text-md text-gray-500">$50</p>
        </div>

        <div className="mt-32 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold">Subtotal</p>
            <p className="text-md">$170</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Discout</p>
            <p className="text-md rounded-full bg-[#e91e6250] px-1 text-pink-500">
              -$20.32
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Delivery</p>
            <p className="text-md">$34</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg">VAT</p>
            <p className="text-md">$21.46</p>
          </div>
        </div>

        <div className="mb-16 mt-6 flex cursor-pointer items-center gap-4">
          <Bookmark size={32} color="#e91e63" />
          <p className="text-lg font-semibold text-[#D60665]  hover:text-[#e91e62de]">
            Apply a voucher
          </p>
        </div> */
}
