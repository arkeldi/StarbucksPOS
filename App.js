import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Menu from './pages/Menu';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';

const App = ({ className }) => (
  <div className={className}>
    <Navbar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/login" component={Login} />
      <Route path="/createaccount" component={CreateAccount} />
      <Route path="/menu" component={Menu} />
      <Route path="/product" component={Product} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default styled(App)`

`;
