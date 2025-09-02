import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};
export const getCartItems = createAsyncThunk("getCartItems", async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// console.log(cartSlice);

// export const {} = cartSlice.actions;

export default cartSlice.reducer;
