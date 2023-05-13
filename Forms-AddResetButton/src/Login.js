import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClickLogin = () => {
    onLogin({ username, password });
  };
  const handleResetButton = () => {
    setUsername('')
    setPassword('')
  }

  const disabledButton = !username || !password;

  return (
    <div>
      <h1>Fill it to Login</h1>
      <label>Username:</label>
      <input
        name='username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        name='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      /> <br />
      <button onClick={handleClickLogin} disabled={disabledButton}>
        Login
      </button>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
}

export default Login;

