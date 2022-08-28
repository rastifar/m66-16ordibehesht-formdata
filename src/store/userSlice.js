import { createSlice, current } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: {family: "soheili"},
  reducers: {
    setUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(current(state), action);
      return{...state, ...action.payload};
    },
    logout: (state) => {
      return {};
    },
    updateProfile: (state, action)=>{
      return {...state, ...action.payload}
    }
  },
});


export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
