
import React, { useState, useEffect } from 'react';
import './ProductDisplay.css';

const ProductDisplay = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 25, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' },
    { id: 3, name: 'Cup', price: 10, imageUrl: 'cup.png' },
    { id: 4, name: 'Pin', price: 8, imageUrl: 'pin.png' }
  ];

  const [productList, setProductList] = useState(products);

  useEffect(() => {
    const storedProductList = JSON.parse(localStorage.getItem('productList'));
    if (storedProductList) {
      setProductList(storedProductList);
    }
  }, []);

  const handleAddToCart = (product) => {
    const updatedProductList = productList.map((p) => {
      if (p.id === product.id) {
        return { ...p, count: p.count + 1 };
      }
      return p;
    });
    setProductList(updatedProductList);
    addToCart(product);
    localStorage.setItem('productList', JSON.stringify(updatedProductList));
  };

  return (
    <div className="ProductDisplay">
      {productList.map((product) => (
        <div key={product.id} className="ProductItem">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>Count: {product.count !== undefined ? product.count : 0}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;