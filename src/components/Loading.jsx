import { motion, AnimatePresence } from "framer-motion";
import loadingLogo from "../assets/loadingLogo.svg";

const Loading = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
       className="flex h-screen flex-col items-center justify-center space-y-6 bg-pink-600">
        <img src={loadingLogo} alt="" />
        <p className="text-3xl font-bold text-white">Rapid Grills</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
