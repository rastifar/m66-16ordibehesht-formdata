import { createSlice, current } from "@reduxjs/toolkit";

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: [],
  reducers: {
    pushInvoice: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(current(state), action);
      return[...state, ...action.payload];
    },
    emptyList: (state) => {
      return [];
    }
  },
});


export const { pushInvoice, emptyList } = invoiceSlice.actions;

export default invoiceSlice.reducer;
