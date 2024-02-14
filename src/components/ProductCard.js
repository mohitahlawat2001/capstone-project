import React from 'react';

const ProductCard = ({ product }) => {
  const { id, title, price, rating, stock, thumbnail, images } = product;
    const discountPercentage = 20;
  const discountPrice = price * (1 - discountPercentage / 100);

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>
        ${discountPrice.toFixed(2)} (<s>${price.toFixed(2)}</s>)
      </p>
      <div className="ratings">
        <span>Rating: {rating.toFixed(1)}</span>
        <span>Stock: {stock}</span>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
