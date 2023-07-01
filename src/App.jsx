import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import Shops from "./pages/Shops";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shops />} />
          </Routes>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
