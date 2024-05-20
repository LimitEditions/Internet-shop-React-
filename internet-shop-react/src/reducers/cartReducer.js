import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cartItems: [],
    count: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ ...product, quantity: quantity});
      }
      state.count+=quantity;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const itemToRemove = state.cartItems.find(item => item.id === productId);
      if (itemToRemove) {
        state.count -= itemToRemove.quantity; 
        state.cartItems = state.cartItems.filter(item => item.id !== productId);
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find(item => item.id === productId);
      if (itemToUpdate) {
          state.count += quantity - itemToUpdate.quantity;
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
