import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../reducer/productSlice';
import EditProductForm from './EditProductList';

function ProductList() {
    const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();
  const [editProductId, setEditProductId] = useState(null);

  const handleEdit = (id) => {
    setEditProductId(id);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleToggleAvailability = (id) => {
    const product = products.find(product => product.id === id);
    dispatch(updateProduct({ ...product, available: !product.available }));
  };

  const renderEditForm = () => {
    if (!editProductId) return null;
    const product = products.find(product => product.id === editProductId);
    if (!product) return null;
    return <EditProductForm productId={product.id} />;
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Available: {product.available ? 'Yes' : 'No'}</p>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
              <button onClick={() => handleToggleAvailability(product.id)}>Toggle Availability</button>
              <button onClick={() => handleEdit(product.id)}>Edit</button>
            </div>
            {renderEditForm()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
