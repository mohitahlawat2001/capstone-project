
import React, { useState, useEffect } from 'react';
import './ProductDisplay.css';

const ProductDisplay = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 25, imageUrl: 'hoodie.png' , details: 'This is a hoodie. It is very comfortable and warm.'},
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' , details: 'This is a t-shirt. It is very comfortable and cool.'},
    { id: 3, name: 'Cup', price: 10, imageUrl: 'cup.png' , details: 'This is a cup. It is very useful and practical.'},
    { id: 4, name: 'Pin', price: 8, imageUrl: 'pin.png' , details: 'This is a pin. It is very fashionable and stylish.'},
  ];

  const [productList, setProductList] = useState(products);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem('cart'));
    
    if (savedCart) {
      const updatedProducts = products.map((product) => {
        const savedItem = savedCart.find((item) => item.id === product.id);
        return { ...product, count: savedItem ? savedItem.quantity : 0 };
      });
      setProductList(updatedProducts);
    }

  });

  const handleAddToCart = (product) => {
    addToCart(product);
    const updatedProducts = productList.map((item) => {
      if (item.id === product.id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setProductList(updatedProducts);
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