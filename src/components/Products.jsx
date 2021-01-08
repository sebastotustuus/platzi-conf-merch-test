import React, { useContext } from 'react';
import '../styles/components/Products.css';
import { AppContext } from '../context/AppContext';
// Components
import Product from './Product';

const Products = () => {
  const {
    state: { products },
    addtoCart,
  } = useContext(AppContext);
  const handleAddToCart = (product) => () => {
    addtoCart(product);
  };

  return (
    <div className="products">
      <div className="products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
