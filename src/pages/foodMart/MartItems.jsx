import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const MartItems = (props) => {
    const { id, name, price, image } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

  return (
    <div>
      <div>
        <div className="flex items-center justify-between gap-3 rounded-md p-3 shadow-lg drop-shadow-md">
          <div className="flex items-center gap-3">
            <img
              src={image}
              alt={name}
              className="h-[3.5rem] max-w-[5rem] md:h-[5rem] md:w-[10rem] lg:h-[10rem] lg:max-w-[5rem] object-contain"
            />
            <div>
              <p className="max-w-[6rem] md:text-2xl">{name}</p>
              <p className="md:text-3xl">${price}</p>
            </div>
          </div>
          <div className="flex max-w-[7rem] items-center justify-between gap-4">
            <button
              className="rounded-lg border border-[#e91e63] px-4 py-1.5 hover:bg-[#e91e6248] md:px-6 md:text-xl"
              onClick={() => addToCart(id)}
            >
              Add {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MartItems;
