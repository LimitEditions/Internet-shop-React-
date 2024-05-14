import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/products';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: productsData,
  },
  reducers: {},
});

export const selectProducts = (state) => state.products.items;

export default productSlice.reducer;
