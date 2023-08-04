import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(username === 'admin' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  }

  return (
    <div style={{backgroundColor: 'lightblue', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' onChange={e => setUsername(e.target.value)} />
        <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
        <input type='submit' value='Login' />
        {/* Add Facebook and Google login buttons here */}
      </form>
    </div>
  );
}

export default Login;
