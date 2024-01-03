import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    addWishItem: (state, payload) => {
      state.push(payload.payload);
    },
  },
});
export const { addWishItem } = watchlistSlice.actions;
export default watchlistSlice;
