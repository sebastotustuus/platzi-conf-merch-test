import React from 'react';
import initalState from '../initialState';
import Products from '../components/Products';

const Home = () => <Products products={initalState.products} />;

export default Home;
