import React, { useState } from 'react';

export const Register  = (props) => {
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
      <h3>Idea Storage SignUp</h3>
      <form className="register-form" onSubmit={handleSubmit}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="your username" id="username" name="username" />
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          { !isPending && <button className="submit" type="submit">Sign Up</button>}
          { isPending && <button className="submit" type="submit" disabled>Signing Up</button>}
      </form>
      <button className="signup-link-btn" onClick={() => props.onFormSwitch('login')}>Login Here</button>
      <div className="error-msg">
          {errorMsg}
      </div>
    </div>
  );
};