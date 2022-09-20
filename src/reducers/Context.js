import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
    filters: {
      searchQuery: "",
      sort: "",
      discount: "",
      rating: 0,
    },
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default Context;
