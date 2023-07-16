import { useContext } from "react";
import { PlusCircle, MinusCircle } from "phosphor-react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between gap-3 rounded-md p-3 shadow-lg drop-shadow-md">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt=""
          className="h-[3.5rem] max-w-[5rem] md:h-[5rem] md:w-[10rem] lg:h-[10rem] lg:max-w-[5rem] object-contain"
        />
        <div>
          <p className="md:text-xl">{name}</p>
          <p className="md:text-xl">${price}</p>
          <div className="flex justify-between items-center w-[5rem]">
            <MinusCircle size={18} onClick={() => {removeFromCart(id)}} />
            <span>{cartItems[id]}</span>
            <PlusCircle size={18} onClick={() => {addToCart(id)}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
