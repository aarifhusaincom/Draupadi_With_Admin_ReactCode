let initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT_USER":
      state = {};
      return state;
    default:
      return state;
  }
};
