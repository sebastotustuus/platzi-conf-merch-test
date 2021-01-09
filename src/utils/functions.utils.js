/* eslint-disable import/prefer-default-export */
export const handleTotalItems = (cart) => {
  const reducer = (accum, currentValue) => accum + currentValue.price;
  return cart.reduce(reducer, 0);
};
