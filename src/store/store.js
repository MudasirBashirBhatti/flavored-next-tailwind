"use client";
import { configureStore } from "@reduxjs/toolkit";
import navSlice from "@/features/navSlice";

const store = configureStore({
  reducer: {
    navSlice: navSlice,
  },
});

export default store;
