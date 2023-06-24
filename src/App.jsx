import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="font-grotesk" >
      {/* <AnimatePresence>
        {isLoading ?
          (
            <motion.div
              key={"loadingScreen"}
              initial={{opacity: 0}} 
              animate={{opacity: 1, ease: "easeOut"}} 
              exit={{opacity: 0}} 
              className="bg-pink-600 p-36"
            >
              <Loading />
             
            </motion.div>
          ):
          <motion.div
              key={"cart"}
              initial={{opacity: 0}} 
              animate={{opacity: 1, ease: "easeOut"}} 
              exit={{opacity: 0}} 
            >
              <Cart />
            </motion.div>

        }
      </AnimatePresence> */}

      <AnimatePresence>
      {isLoading ? (
        <motion.div
        key={"loadingScreen"}
        initial={{opacity: 0}} 
        animate={{opacity: 1, ease: "easeOut"}} 
        exit={{opacity: 0}} 
      >
        <Loading />
      </motion.div>
        ):
        <motion.div
              key={"cart"}
              initial={{opacity: 0}} 
              animate={{opacity: 1, ease: "easeOut"}} 
              exit={{opacity: 0}} 
            >
              <Cart />
            </motion.div>
      }
      </AnimatePresence>
    </div>
  );
};

export default App;
