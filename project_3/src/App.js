import React from 'react';
import styled from 'styled-components';
import { Routes ,Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import PageNotFound from './pages/PageNotFound';
import Manager from './pages/Manager';
import Table from './pages/Table';
import Menu from './pages/Menu';
import Product from './pages/Product';
import Order from './pages/Order';
import MenuEmployee from './pages/MenuEmployee';
import ProductEmployee from './pages/ProductEmployee';
import OrderEmployee from './pages/OrderEmployee';
import MenuScreen from './pages/MenuScreen';

const App = ({ className }) => (
  <div className={className}>
    <Navbar />
      <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/AboutPage' element={<AboutPage />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/createaccount' element={<CreateAccount/>} />
      <Route path='/manager' element={<Manager />} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path='/table' element={<Table />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order" element={<Order />} />
      <Route path="/menuemployee" element={<MenuEmployee />} />
      <Route path="/productemployee/:id" element={<ProductEmployee />} />
      <Route path="/orderem" element={<OrderEmployee />} />
      <Route path="/menuscreen" element={<MenuScreen/>} />
      <Route element={PageNotFound} />
    </Routes>
  </div>
  
);


export default styled(App)`
`;