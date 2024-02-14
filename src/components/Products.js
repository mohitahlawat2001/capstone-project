import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './Products.css';

const Products = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderProducts = () => {
    if (isLoading) {
      return <p>Loading products...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <div className="products-container">
      {renderProducts()}
    </div>
  );
};

export default Products;
