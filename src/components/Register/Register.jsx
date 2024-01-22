import React, { useState } from 'react';
import axios from 'axios';

export const Register  = (props) => {
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
    await axios.post('https://poem-assistant-api.onrender.com/signup', requestBody, { headers })
    .then(response => {
      props.onFormSwitch('login')
    })
    .catch(error => {
      console.log(error.message)
      setError("Error signing up");
      setIsPending(false);
    });
  }

  return (
    <div>
      <h3>SignUp</h3>
      <form className="register-form" onSubmit={handleSubmit}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="your username" id="username" name="username" />
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="your password" id="password" name="password" />
          { !isPending && <button className="submit" type="submit">Sign Up</button>}
          { isPending && <button className="submit" type="submit" disabled>Signing Up...</button>}
      </form>
      <div className="error-msg">
          {errorMsg}
      </div>
      <button className="signup-link-btn" onClick={() => props.onFormSwitch('login')}>Login Here</button>
    </div>
  );
};