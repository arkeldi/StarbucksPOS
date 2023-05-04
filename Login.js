import React, { useState } from 'react';
import styled from 'styled-components';
import {gapi} from 'gapi-script';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
  text-align: center;
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

  const handleSignIn = () => {
    const auth2 = gapi.auth2.getAuthInstance();

    auth2.signIn().then(() => {
      setSuccess(true);
      setError('');
    }).catch(() => {
      setSuccess(false);
      setError('Invalid username');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'manager' || username === 'client') {
      handleSignIn();
    } else {
      setSuccess(false);
      setError('Invalid username');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
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
    </LoginContainer>
  );
};

export default Login;

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (username === 'manager' || username === 'client') {
//       setSuccess(true);
//       setError('');
//     } else {
//       setSuccess(false);
//       setError('Invalid username');
//     }
//   };

//   return (
    
//     <LoginContainer>
//       <LoginForm onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <Input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//         <Input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <SubmitButton type="submit">Submit</SubmitButton>
//         {error && <ErrorText>{error}</ErrorText>}
//         {success && <p>Login successful!</p>}
//       </LoginForm>
//     </LoginContainer>
//   );
// };

// export default Login;