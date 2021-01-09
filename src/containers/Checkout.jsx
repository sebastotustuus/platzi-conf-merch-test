import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import { AppContext } from '../context/AppContext';
import { handleTotalItems } from '../utils/functions.utils';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemoveFromCard = (id) => () => {
    removeFromCart(id);
  };

  return (
    <div className="checkout">
      <div className="checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de Pedidos: </h3>
        ) : (
          <h3>Sin Pedidos...</h3>
        )}
        {cart.map((item) => (
          <div className="checkout-item" key={item.id}>
            <div className="checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type="submit" onClick={handleRemoveFromCard(item.id)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="checkout-sidebar">
          <h3>{`Precio Total: $${handleTotalItems(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="submit">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
