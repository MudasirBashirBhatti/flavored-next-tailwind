import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "-100%",
};

const navSlice = createSlice({
  name: "showHideNav",
  initialState,
  reducers: {
    mobileNavDiv: (state) => {
      if (state.value === "-100%") {
        state.value = "0%";
      } else {
        state.value = "-100%";
      }
    },
  },
});

export const { mobileNavDiv } = navSlice.actions;
export default navSlice.reducer;
