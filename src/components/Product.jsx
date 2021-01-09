/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Product = ({ handleAddToCart, product } = {}) => (
  <div className="products-item">
    <img src={product.image} alt="Imagen del producto" />
    <div className="products-item-info">
      <h2>
        {product.title}
        <span>${product.price}</span>
      </h2>
      <p>{product.description}</p>
    </div>
    <button type="button" onClick={handleAddToCart(product)}>
      Comprar
    </button>
  </div>
);

export default Product;
