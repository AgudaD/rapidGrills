import { createContext, useState } from "react";
import { meals } from "../mockData";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < meals.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      if (typeof updatedItems[itemId] === 'number') {
        updatedItems[itemId] += 1;
      } else {
        updatedItems[itemId] = 1;
      }
      return updatedItems;
    });
  }
  

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = meals.find((meal) => meal.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

// const addToCart = (itemId) => {
//   setCartItems((prev) => {
//     const updatedItems = { ...prev };
//     if (typeof updatedItems[itemId] === 'number') {
//       updatedItems[itemId] += 1;
//     } else {
//       updatedItems[itemId] = 1;
//     }
//     return updatedItems;
//   });
// }

// const removeFromCart = (itemId) => {
//   setCartItems((prev) => {
//     const updatedItems = { ...prev };
//     if (typeof updatedItems[itemId] === 'number' && updatedItems[itemId] > 1) {
//       updatedItems[itemId] -= 1;
//     } else {
//       delete updatedItems[itemId];
//     }
//     return updatedItems;
//   });
// };