import { useDispatch } from "react-redux";

let initialState = [];

export const wishlistReducer = (state = initialState, action) => {
  // const dispatch = useDispatch();
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state, action.payload];
    case "REMOVE_FROM_WISHLIST_IN_PRODUCT":
      const index = state.findIndex((e) => e.product_id == action.payload);
      state.splice(index, 1);
      return [...state];
    case "REMOVE_FROM_WISHLIST":
      const filteredList = state.filter((e) => e.uid !== action.payload.uid);

      return [...filteredList];
    case "CLEAR_WISHLIST":
      state = [];
      return [...state];
    default:
      return state;
  }
};
