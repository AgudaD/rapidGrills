import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { Routes, Route } from "react-router-dom";
import Shops from "./pages/shop/Shops";
import ShopContextProvider from "./context/ShopContext";
import Mart from "./pages/foodMart/Mart";
import Checkout from "./pages/checkout/Checkout";
import Pickup from "./pages/Pickup/Pickup";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="font-grotesk">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key={"loadingScreen"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, ease: "easeOut" }}
            transition={{ duration: 0.75 }}
            exit={{ opacity: 0 }}
          >
            <Loading />
          </motion.div>
        ) : (
          <ShopContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<Shops />} />
              <Route path="/mart" element={<Mart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/pickup" element={<Pickup />} />
            </Routes>
          </ShopContextProvider>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
