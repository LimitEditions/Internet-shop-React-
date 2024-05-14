import products from '../data/products';

export const loadProducts = () => ({
    type: 'LOAD_PRODUCTS',
    payload: products
});
