import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Heart, ShoppingCart, X } from "phosphor-react";
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowX = "hidden";
    };
  }, [!open]);

  return (
    <div>
      {/* Burger menu */}
      <div
        className="flex cursor-pointer items-center justify-between gap-3 rounded-xl p-6 shadow-xl drop-shadow-md lg:hidden"
        onClick={() => setOpen(!open)}
        style={{
          opacity: open && "0",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex w-fit flex-col gap-1">
            <div className="w-5 rounded-sm border border-y-[1.25px] border-pink-500 bg-white"></div>
            <div className="w-4 rounded-sm border border-y-[1.25px] border-pink-500 bg-white"></div>
            <div className="w-6 rounded-sm border border-y-[1.25px] border-pink-500 bg-white"></div>
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            <div>
              <p className="text-sm font-semibold text-pink-500 ">Home</p>
              <p className="-mt-1 text-xs">Juan Tebas</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <Heart size={24} color="#e91e63" />
          <Link to={"/cart"}>
            <ShoppingCart size={24} color="#e91e63" />
          </Link>
        </div>
      </div>

      <div
        className="fixed left-0 top-0 z-50 hidden h-screen w-full overflow-hidden"
        style={{
          display: open && "block",
          background: open && "white",
          opacity: open && "90%",
          transition: open && "all",
          transitionDuration: open && "500ms",
        }}
      >
        <div
          className="absolute left-6 top-6 opacity-0"
          onClick={() => setOpen(!open)}
          style={{
            opacity: open && "1",
          }}
        >
          <X
            size={32}
            color="#e91e65"
            className="absolute "
            onClick={() => setShowMenu(false)}
          />
        </div>
        <nav
          className="font-helvetica absolute left-6 top-8 z-50 flex flex-col text-center text-black opacity-0"
          style={{
            opacity: open && "1",
            transform: open && "translate(40px)",
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/about"
          >
            About us
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/press"
          >
            Press
          </NavLink>
        </nav>
      </div>

      {/* Web nav */}
      <div className="hidden lg:flex justify-center items-center gap-2 rounded-xl p-6 shadow-xl drop-shadow-md">
        <img src={logo} alt="" />
        <h1 className="text-3xl tracking-wide">foodpanda</h1>
      </div>
    </div>
  );
};

export default Navbar;
