import React from 'react';
import NavLink from './NavLink';
import styled from 'styled-components';

const Navbar = ({ className }) => (
  <nav className={className}>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to='AboutPage'>About</NavLink>
    <NavLink to="Login">Login</NavLink>
    <NavLink to="createaccount">Create Account</NavLink>
    <NavLink to='Manager'>Manager</NavLink>
  </nav>
); 

export default styled(Navbar)`

`;