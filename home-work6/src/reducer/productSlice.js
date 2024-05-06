import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState:{
       products: [], 
    },
    
    reducers: {
        addProduct(state, action) {
            state.products.push(action.payload);
        },
        deleteProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProduct(state, action) {
            const { id, name, description, price, available } = action.payload;
            const existingProduct = state.products.find(product => product.id === id);
            if (existingProduct) {
                existingProduct.name = name;
                existingProduct.description = description;
                existingProduct.price = price;
                existingProduct.available = available;
            }
        }
    }
})

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions

export default productSlice.reducer