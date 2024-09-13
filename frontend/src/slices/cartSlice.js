import { createSlice } from '@reduxjs/toolkit';
// here we use "apiSlice" because we are NOT using endpoints with asyncronous requests!
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // The item to add to the cart
      const item = action.payload;

      // Update the cart state using the updateCart function
      return updateCart(state, item)
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;