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
      const newItem = action.payload;
      const itemExists = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      ); // checks if cart has existing item
      const cartItems = itemExists //checks if item exists (T/F) in cart
        ? state.cart.cartItems.map(
            (
              item //if true (exists) then you have to find that item in cart
            ) => (item._id === itemExists._id ? newItem : item) //when item is found in cart and it matches with what you wanna add then it updates the quantity ':' otherwise adds the item
          )
        : [...state.cart.cartItems, newItem]; //if itemExists is null then we need to add item to the end of the array
      return { ...state, cart: { ...state.cart, cartItems } };

    default:
      return state;
  }
}

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
