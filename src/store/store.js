import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import watchlistSlice from "./watchlistSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
    watchlist: watchlistSlice.reducer,
  },
});
export default store;
