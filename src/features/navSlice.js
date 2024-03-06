"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  height: "90px",
  background: "none",
};

const navSlice = createSlice({
  name: "showHideNav",
  initialState,
  reducers: {
    mobileNavDiv: (state) => {
      if (state.height === "440px") {
        state.height = "90px";
        state.background = "none";
      } else {
        state.height = "440px";
        state.background = "white";
      }
    },
  },
});

export const { mobileNavDiv } = navSlice.actions;
export default navSlice.reducer;
