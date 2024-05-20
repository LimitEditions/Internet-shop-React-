import { createSlice } from '@reduxjs/toolkit';

const quantitiesSlice = createSlice({
  name: 'quantities',
  initialState: {quantity: 0},
  reducers: {
    setQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      state[productId] = quantity;
    },
  },
});

export const { setQuantity } = quantitiesSlice.actions;

export default quantitiesSlice.reducer;
