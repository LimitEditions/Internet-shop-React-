export const addToCart = (product, quantity = 1) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity
        }
    };
};

export const removeFromCart = (productId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: productId
    };
};

export const updateQuantity = (productId, quantity) => {
    return {
        type: 'UPDATE_QUANTITY',
        payload: {
            productId,
            quantity
        }
    };
};