import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
});

export default modalSlice;
