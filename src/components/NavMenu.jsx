import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, UserCircle, X } from "phosphor-react";
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
        style={{
          opacity: open && "0",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex w-fit flex-col gap-1" onClick={() => setOpen(!open)}>
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

        <div className="flex items-center gap-4">
          <ShoppingCart size={28} color="#e91e63" />
          <UserCircle size={28} color="#e91e63" />
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
            color="#e91e63"
            className="absolute "
            onClick={() => setOpen(false)}
          />
        </div>
        <nav
          className="font-helvetica absolute left-6 top-16 z-50 flex flex-col space-y-5 text-black opacity-0"
          style={{
            opacity: open && "1",
            transform: open && "translate(40px)",
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/meals"
          >
            Meals
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/history"
          >
            Order History
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/useraccount"
          >
            User Account
          </NavLink>
        </nav>
      </div>

      {/* Web nav */}
      <div className="hidden lg:flex justify-between items-center rounded-xl p-6 shadow-xl drop-shadow-md">
        <div className="flex items-center">
          <img src={logo} alt="" />
          <h1 className="text-3xl text-[#e91e63] font-bold tracking-wide">Rapid Grills</h1>
        </div>

        <div className="flex items-center gap-4">
          <ShoppingCart size={32} color="#e91e63" />
          <UserCircle size={30} color="#e91e63" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
