/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const history = useHistory();
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const formRef = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(formRef.current);
    let buyer = {};
    for (const [name, value] of formData) {
      buyer = { ...buyer, [name]: value };
    }
    const voids = Object.values(buyer).filter((data) => data === '').length;
    if (voids === 0) {
      addToBuyer(buyer);
      history.push('/checkout/payment');
    } else {
      // eslint-disable-next-line no-undef
      alert('Faltan campos por llenar');
    }
  };

  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>información de contacto:</h2>
        </div>
        <div className="information-form">
          <form ref={formRef}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="information-buttons">
          <Link to="/checkout" className="information-back">
            Regresar
          </Link>
          <div className="information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="information-item" key={item.title}>
            <div className="information-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
