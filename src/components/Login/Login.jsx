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
    setIsPending(true);

    const headers = {
      'Content-Type': 'application/json'   
    };
    const requestBody = {
      username: username,
      password: pass
    };
    await axios.post('https://poem-assistant-api.onrender.com/login', requestBody, { headers })
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        props.onFormSwitch('notes')
      }
      setError("Error logging in");
      setIsPending(false);
    })
    .catch(error => {
      console.log(error.message);
      setError("Error logging in");
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
          { isPending && <button className="submit" type="submit" disabled>Logging In...</button>}
      </form>
      <div className="error-msg">
          {errorMsg}
      </div>
      <button className="login-link-btn" onClick={() => props.onFormSwitch('register')}>Sign Up Here</button>
    </div>
  );
};