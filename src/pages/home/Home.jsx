import React from "react";
import Navbar from "../../components/NavMenu";
import LocateRestaurant from "../../components/LocateRestaurant";
import Restaurants from "../../components/Restaurants";
import { motion } from "framer-motion";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="relative z-50"
    >
      {/* <Navbar /> */}
      <Navbar />

      <div className="my-12 px-6">
        <div>
          <p className="text-2xl font-semibold">Good day, David</p>
          <p className="text-lg">What's for dinner? There are 50 restaurants around you.</p>
        </div>

        <SearchBar />
        <LocateRestaurant />
        {/* <Restaurants /> */}
      </div>
    </motion.div>
  );
};

export default Home;
