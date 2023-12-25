import React, { useState } from 'react';
import axios from 'axios';

export const GrammerChecker = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setError('');

    const headers = {
      'Content-Type': 'application/json'   
    };
    const requestBody = {
      message: message
    };

    await axios.post('https://poem-assistant-api.onrender.com/grammer-checker', requestBody, { headers })
    .then(response => {
      setResponse(response.data.message);
      setIsPending(false);
    })
    .catch(error => {
      setError(error.message);
      setIsPending(false);
    });
  };

  return (
    <div className="form">
      <h3>Grammer Checker</h3>
        <form className="form-container" onSubmit={handleSubmit}>
          <textarea
            value={message}
            placeholder="Add text here"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          { !isPending && <button type="submit" className="submit">Submit</button>}
          { isPending && <button type="submit" className="submit" disabled>Checking Grammer...</button>}
        <br />
        </form>
      { response && (
        <div className="response-container">
          <div className="response">{response}</div>
        </div>
      )}
      { error && (
        <div className="error-container">
          <div className="error">{error}</div>
        </div>
      )}
    </div>
  );
};