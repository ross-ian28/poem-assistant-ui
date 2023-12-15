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
      <h3>Notes Login</h3>
      <form className="register-form" onSubmit={handleSubmit}>
          <label form="username">Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="your username" id="username" name="username" />
          <label form="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          { !isPending && <button type="submit">Login</button>}
          { isPending && <button type="submit" disabled>Logging In</button>}
          <button className="link-btn" onClick={() => props.togglePage('notes')}>Notes</button>
      </form>
      <div className="error-msg">
          {errorMsg}
      </div>
    </div>
  );
};