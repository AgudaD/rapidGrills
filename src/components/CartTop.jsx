import { X } from "phosphor-react";
import { Link } from "react-router-dom";

const CartTop = () => {
  return (
    <div className="flex items-center gap-4 rounded-sm p-6 shadow-lg drop-shadow-2xl">
      <Link to={"/"}>
        <X
            size={32}
            color="#e91e63"
            className=""
          />
      </Link>
        <div>
            <p className="text-lg">Cart</p>
            <p className="text-sm -mt-2">Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
  )
}

export default CartTop
