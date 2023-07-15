import { Link } from "react-router-dom"
import { ArrowLeft, ShoppingCart } from "phosphor-react"

const Pickup = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between gap-4 rounded-sm p-6 shadow-lg drop-shadow-2xl">
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <ArrowLeft size={32} color="#e91e63" className="" />
          </Link>
          <div>
            <p className="text-lg">Pickup</p>
            <p className="-mt-2 text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <Link to={"/"}>
          <ShoppingCart size={24} color="#e91e63" />
        </Link>
      </div>

      <div className="px-6 mt-32">
        <Link to={"/checkout"}>
          <button className="w-full rounded-md bg-[#D60665] px-6 py-2 text-white hover:bg-[#e91e62de]">
            Procced to Payment
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Pickup
