import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import { AppContext } from '../context/AppContext';

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header-title">PlatziConf Merch</h1>
      </Link>
      <div className="header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
