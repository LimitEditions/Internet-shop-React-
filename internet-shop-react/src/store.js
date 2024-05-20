import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import quantitiesReducer from './reducers/quantityReducer';

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        quantities: quantitiesReducer,
    }
});

export default store;
