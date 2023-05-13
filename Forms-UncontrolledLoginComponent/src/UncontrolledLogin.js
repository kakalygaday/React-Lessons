import React, { useRef } from 'react';

function UncontrolledLogin({ onLogin }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleClickLogin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    onLogin({ username, password });
  };
  const handleResetButton = () => {
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <div>
      <h1>Fill it to Login</h1>
      <label>Username:</label>
      <input
        name='username'
        ref={usernameRef}
      />
      <br />
      <label>Password:</label>
      <input
        name='password'
        ref={passwordRef}
      /> <br />
      <button onClick={handleClickLogin} >
        Login
      </button>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
}

export default UncontrolledLogin;

