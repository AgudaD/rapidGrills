import { ArrowLeft, PencilSimpleLine, Plus } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className=" flex items-center gap-4 rounded-sm p-6 shadow-lg drop-shadow-2xl">
        <Link to={"/cart"}>
          <ArrowLeft size={32} color="#e91e63" className="" />
        </Link>
        <div>
          <p className="text-lg">Checkout</p>
          <p className="-mt-2 text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="px-6 py-6">
        <p className="text-xl font-semibold md:text-2xl">Shipping Address</p>

        <div className="mt-8 space-y-4">
          <div className="flex items-start justify-between rounded-md bg-white px-6 py-3 shadow-lg drop-shadow-md">
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-[#e91e63]"
              />
              <div>
                <p className="text-lg font-semibold md:text-xl">Home</p>
                <p className="text-md text-gray-500 md:text-lg">
                  (+234)-092-091-8342
                </p>
                <p className="text-md text-gray-500">12, koji road, Lekki</p>
              </div>
            </div>
            <PencilSimpleLine size={24} />
          </div>
          <div className="flex items-start justify-between gap-6 rounded-md bg-white px-6 py-3 shadow-lg drop-shadow-md">
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-[#e91e63]"
              />
              <div>
                <p className="text-lg font-semibold md:text-xl">Office</p>
                <p className="text-md text-gray-500 md:text-lg">
                  (+01)-392-409
                </p>
                <p className="text-md text-gray-500">
                  35, craig avenue, Victoria Island
                </p>
              </div>
            </div>
            <PencilSimpleLine size={24} />
          </div>
        </div>

        {/* payment method */}
        <div className="relative mt-10 flex items-center justify-between">
          <img
            src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png"
            alt=""
            className="h-12 w-12 rounded-md object-contain p-2 shadow-md drop-shadow-md"
          />
          <img
            src="https://zeevector.com/wp-content/uploads/PayPal-Symbol.png"
            alt=""
            className="h-12 w-12 rounded-md object-contain p-2 shadow-md drop-shadow-md"
          />
          <img
            src="https://asset.brandfetch.io/iddYbQIdlK/idLRUXusyc.png"
            alt=""
            className="h-12 w-12 rounded-md object-contain p-2 shadow-md drop-shadow-md"
          />
          <Plus
            color="#e91e63"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dotted border-[#e91e63] p-3 font-semibold"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <div className="absolute right-0 top-14 space-y-2 rounded-md bg-white p-4 shadow-md drop-shadow-md transition-opacity duration-500">
              <p>Cash App Lorem, ipsum dolor.</p>
              <hr />
              <p>Venmo</p>
            </div>
          )}
        </div>
      </div>

      {/* total */}
      <div className="mt-10 px-6 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Delivery Fee:</p>
          <p className="text-lg font-semibold">$20</p>
        </div>
        <div className="my-3 flex items-center justify-between">
          <p className="text-gray-600">Subtotal:</p>
          <p className="text-lg font-semibold">$580</p>
        </div>
        <hr />
        <div className="mb-10 mt-5 flex items-center justify-between">
          <p className="text-md font-semibold">Total:</p>
          <p className="text-xl font-semibold">$600</p>
        </div>

        {/* button */}
        <button className="w-full rounded-md bg-[#D60665] px-6 py-2 text-white hover:bg-[#e91e62de]">
          Pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;
