"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "-110%",
};

const navSlice = createSlice({
  name: "showHideNav",
  initialState,
  reducers: {
    mobileNavDiv: (state) => {
      if (state.value === "-110%") {
        state.value = "0%";
      } else {
        state.value = "-110%";
      }
    },
  },
});

export const { mobileNavDiv } = navSlice.actions;
export default navSlice.reducer;
