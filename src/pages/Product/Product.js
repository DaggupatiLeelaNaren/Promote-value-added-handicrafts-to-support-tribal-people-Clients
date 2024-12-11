import React from 'react';

function Product({ title, price, description, imageSrc }) {
  return (
    <div className="product-item">
      {imageSrc && <img src={imageSrc} alt={title} className="product-image" />}
      <h3>{title}</h3>
      <p>${price}</p>
      <p>{description}</p>
      {/* <button>Buy Now</button> */}
    </div>
  );
}

export default Product;
