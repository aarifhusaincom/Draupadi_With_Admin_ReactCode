let initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    // case "REMOVE_FROM_CART":
    //   const index = state.findIndex((e) => e.product_id == action.payload);
    //   state.splice(index, 1);
    //   return [...state];
    case "REMOVE_FROM_CART":
      const filteredList = state.filter((e) => e.uid !== action.payload);

      return filteredList;
    case "CLEAR_CART":
      state = [];
      return [...state];
    default:
      return state;
  }
};
