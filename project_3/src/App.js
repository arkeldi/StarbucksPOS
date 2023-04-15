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

const App = ({ className }) => (
  <div className={className}>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<HomePage />} />
    <Route path='/AboutPage' element={<AboutPage />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/createaccount' element={<CreateAccount/>} />
    <Route path='/manager' element={<Manager />} />
    <Route element={PageNotFound} />
    </Routes>
  </div>
);

export default styled(App)`
`;