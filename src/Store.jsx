import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
    cartQuantities: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      //add item to cart:
      return {
        ...state, //keep all values in field
        cart: {
          ...state.cart, // keeps all previous values in the cart
          cartItems: [...state.cart.cartItems, action.payload], // only update cart items and update with new ones
        },
      };

    default:
      return state;
  }
}

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
