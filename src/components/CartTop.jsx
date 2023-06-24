import { X } from "phosphor-react";

const CartTop = () => {
  return (
    <div className="flex items-center gap-4 rounded-sm p-6 shadow-lg drop-shadow-2xl">
      <X
          size={32}
          color="#e91e63"
          className=""
        />
        <div>
            <p className="text-lg">Cart</p>
            <p className="text-sm -mt-2">Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
  )
}

export default CartTop