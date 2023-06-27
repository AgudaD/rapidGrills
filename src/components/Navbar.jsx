import React, { useState } from "react";
import { Heart, List, ShoppingCart, X } from "phosphor-react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative z-50 flex items-center justify-between rounded-xl p-6 shadow-xl drop-shadow-md cursor-pointer">

      <div className="flex items-center gap-3 md:hidden">
        <List size={40} color="#e91e63" onClick={() => setShowMenu(true)} />
        <div>
          <p className="text-lg font-semibold text-pink-500 ">Home</p>
          <p className="-mt-2">Juan Tebas</p>
        </div>
      </div>

      <div className="hidden items-center md:flex">
        <img src={logo} alt="" className="w-20" />
        <h1 className="text-3xl text-pink-700">foodpanda</h1>
      </div>

      <div className="flex items-center gap-8">
        <Heart size={32} color="#e91e63" />
        <Link to={"/cart"}>
          <ShoppingCart size={32} color="#e91e63" />
        </Link>
      </div>

      {/* Burger Menu */}
      <div
        className="absolute left-0 top-0 -ml-[20rem] h-screen w-[15rem] bg-white py-4 pl-6 transition-all duration-300 ease-linear"
        style={{
          marginLeft: showMenu && "0",
        }}
      >
        <X
          size={32}
          color="#e91e63"
          className="absolute right-5 top-8"
          onClick={() => setShowMenu(false)}
        />
        <ul className="mt-20 cursor-pointer space-y-10">
          <li className="rounded-l-md px-4 py-2 hover:bg-pink-400">Home</li>
          <li className="rounded-l-md px-4 py-2 hover:bg-pink-400">About</li>
          <li className="rounded-l-md px-4 py-2 hover:bg-pink-400">Order</li>
          <li className="rounded-l-md px-4 py-2 hover:bg-pink-400">
            Restaurants
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
