import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';

const Information = () => (
  <div className="information">
    <div className="information-content">
      <div className="information-head">
        <h2>información de contacto:</h2>
      </div>
      <div className="information-form">
        <form action="">
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Correo Electronico" name="email" />
          <input type="text" placeholder="Direccion" name="addres" />
          <input type="text" placeholder="apto" name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="Pais" name="country" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Codigo postal" name="cp" />
          <input type="text" placeholder="Telefono" name="phone" />
        </form>
      </div>
      <div className="information-buttons">
        <div className="information-back">Regresar</div>
        <Link to="/checkout/payment">
          <div className="information-next">Pagar</div>
        </Link>
      </div>
    </div>
    <div className="information-sidebar">
      <h3>Pedido:</h3>
      <div className="information-item">
        <div className="information-element">
          <h4>iTEM Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  </div>
);

export default Information;
