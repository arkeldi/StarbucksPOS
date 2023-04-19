import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #888;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px #ddd;
`;

const SubmitButton = styled.button`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background-color: #00704A;
  color: #fff;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'manager' || username === 'client') {
      setSuccess(true);
      setError('');
    } else {
      setSuccess(false);
      setError('Invalid username');
    }
  };

  return (
    <LoginContainer>
      <div style={{
      backgroundColor: '#1e3932',
      height: '100px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1,
      textAlign: 'center',
    }}></div>
    <div style={{ marginTop: '100px', marginBottom: '100px', padding: '15px' }}></div>
      <LoginForm onSubmit={handleSubmit}>
      <img
  src={require('./logo.png')}
  alt="Logo"
  style={{ width: '5%', position: 'absolute', top: '10px', right: '10px', zIndex:20 }}
/>
        <h2>Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
        {error && <ErrorText>{error}</ErrorText>}
        {success && <p>Login successful!</p>}
      </LoginForm>
      <div style={{
      backgroundColor: '#1e3932',
      height: '50px',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      textAlign: 'center',
    }}>
    </div>
    </LoginContainer>
  );
};

export default Login;
