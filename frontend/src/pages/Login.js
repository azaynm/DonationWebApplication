import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/donation-list');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the username and password match the hardcoded values
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      handleLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='container d-flex flex-column'>
      <h2 className='my-2'>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="my-2" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
