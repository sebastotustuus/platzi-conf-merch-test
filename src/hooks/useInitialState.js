import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addtoCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== id),
    });
  };

  return {
    addtoCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
