import React, { useState } from 'react';

export const Login  = (props) => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [errorMsg, setError] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
      // Login user backend call
      setError('');
      setIsPending(false);
  }

  return (
    <div>
      <h3>Idea Storage Login</h3>
      <form className="login-form" onSubmit={handleSubmit}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="your username" id="username" name="username" />
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="your password" id="password" name="password" />
          { !isPending && <button type="submit">Login</button>}
          { isPending && <button type="submit" disabled>Logging In</button>}
      </form>
      <button className="login-link-btn" onClick={() => props.onFormSwitch('register')}>Register Here</button>
      <div className="error-msg">
          {errorMsg}
      </div>
    </div>
  );
};