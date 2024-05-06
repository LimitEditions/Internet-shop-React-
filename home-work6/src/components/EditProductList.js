import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct } from '../reducer/productSlice';

function EditProductForm({ productId }) {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.products.find(product => product.id === productId));
  
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);
  
  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailable(product.available);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ ...product, name, description, price, available }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <label>
        Available:
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditProductForm;
