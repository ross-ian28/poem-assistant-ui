import React, { useState } from 'react';
import axios from 'axios';

export const Login  = (props) => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [errorMsg, setError] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const headers = {
      'Content-Type': 'application/json'   
    };
    const requestBody = {
      username: username,
      password: pass
    };

    await axios.post('https://poem-assistant-api.onrender.com/login', requestBody, { headers })
    .then(response => {
      props.onFormSwitch('notes')
    })
    .catch(error => {
      setError(error.message);
      setIsPending(false);
    });
  }

  return (
    <div>
      <h3>Login</h3>
      <form className="login-form" onSubmit={handleSubmit}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="your username" id="username" name="username" />
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="your password" id="password" name="password" />
          { !isPending && <button className="submit" type="submit">Login</button>}
          { isPending && <button className="submit" type="submit" disabled>Logging In</button>}
          <button className="login-link-btn" onClick={() => props.onFormSwitch('register')}>Sign Up Here</button>
      </form>
      <div className="error-msg">
          {errorMsg}
      </div>
    </div>
  );
};