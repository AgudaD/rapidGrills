import { useContext } from "react";

const CartItem = (props) => {
  const { id, name, price, image } = props.data;

  return (
    <div className="flex items-center justify-between gap-3 rounded-md p-3 shadow-lg drop-shadow-md">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt=""
          className="h-[3.5rem] max-w-[5rem] md:h-[5rem] md:w-[7rem] lg:h-[4rem] lg:max-w-[5rem]"
        />
        <div>
          <p className="md:text-xl">{name}</p>
          <p className="md:text-xl">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
