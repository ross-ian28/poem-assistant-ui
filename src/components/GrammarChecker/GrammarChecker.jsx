import React, { useState } from 'react';
import axios from 'axios';

export const GrammarChecker = () => {
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

    await axios.post('https://poem-assistant-api.onrender.com/grammar-checker', requestBody, { headers })
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
      <h3>grammar Checker</h3>
        <form className="form-container" onSubmit={handleSubmit}>
          <textarea
            value={message}
            placeholder="Add text here"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          { !isPending && <button className="submit">Submit</button>}
          { isPending && <button className="submitting" disabled>Checking grammar</button>}
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