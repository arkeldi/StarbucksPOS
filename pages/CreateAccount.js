/**
 * @fileoverview This is a simple React component for creating a Starbucks account. Code: Arkeldi 
 */

import React, { useState } from 'react';
import styled from 'styled-components';

// Styled container for the whole component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px; 
`;

// Styled title for the component
const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

// Styled form container
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #888;
`;

// Styled label for input fields
const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

// Styled input fields
const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px #ddd;
`;

// Styled submit button
const SubmitButton = styled.button`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background-color: #00704A;
  color: #fff;
  cursor: pointer;  
  &:hover {
    background-color: #005738;
  }
`;

// Styled error text
const ErrorText = styled.p`
  color: red;
`;


/**
 * CreateAccount component represents the UI for creating a Starbucks account.
 * returns {JSX.Element} The rendered CreateAccount component.
 */

const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   /**
   * Handles form submission.
   * param {Event} e - The form submit event.
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, e.g., call an API to create the account
    console.log('First Name:', firstName, 'Last Name:', lastName, 'Email:', email, 'Password:', password);
  };

  return (
    <Container>
      <Title>Create a Starbucks Account</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstName">First Name:</Label>
        <Input
          type="text"
          placeholder="* First Name"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <Label htmlFor="lastName">Last Name:</Label>
        <Input
          type="text"
          placeholder="* Last Name"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          placeholder="* Email Address"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          placeholder="* Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="8"
          required
        />
        <p style={{ fontSize: '12px', marginBottom: '15px' }}>
        *Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.
        </p>

        <SubmitButton type="submit">Create Account</SubmitButton>
      </Form>
    </Container>
  );
};
// Export the CreateAccount component as the default export
export default CreateAccount;
