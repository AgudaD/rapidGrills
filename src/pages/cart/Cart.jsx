import CartTop from "../../components/CartTop";
import { motion } from "framer-motion";
import { meals } from "../../mockData";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { ShoppingCartSimple } from "phosphor-react";
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

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

      {totalAmount > 0 ? (
        <div className="mt-10">
          <hr className="bg-gray-600" />
          <div className="-mt-3 px-12 py-6 font-semibold">
            <div className="mb-5 mt-5 flex items-center justify-between">
              <p>Total</p>
              <p>${totalAmount}</p>
            </div>
            <button className="w-full rounded-md bg-[#D60665] px-6 py-2 text-white hover:bg-[#e91e62de]">
              Place order
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-4">
          <p className="text-2xl font-semibold">
            Empty Cart
          </p>
          <ShoppingCartSimple size={32} />
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
