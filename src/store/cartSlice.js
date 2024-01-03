import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    remoteItem: (state, action) => {
      return state.filter((i) => i.id !== action.payload.id);
    },
  },
});
export const { addItem, remoteItem } = cartSlice.actions;
export default cartSlice;
