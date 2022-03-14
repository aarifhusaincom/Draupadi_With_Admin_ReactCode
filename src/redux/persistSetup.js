import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import reducer from './reducers';
import storage from "redux-persist/lib/storage";
import { userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { wishlistReducer } from "./reducers/wishlistReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const persistConfig = {
  key: "reducer",
  storage: storage,
  // whitelist: ['reducer'] // or blacklist to exclude specific reducers
};
const presistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { persistor, store };
