import React, { useState } from 'react';
import axios from 'axios';

export const PromptGenerator = () => {
  const [amount, setAmount] = useState(1.0);
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
      amount: amount
    };

    await axios.post('https://poem-assistant-api.onrender.com/prompt-generator', requestBody, { headers })
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
    <div className="component-container">
      <div className="form">
        <h3>Prompt Generator</h3>
        <form className="poem-form" onSubmit={handleSubmit}>
          <input type="number" placeholder="how many prompts do you want" id="quantity" name="quantity" min="1" onChange={(e) => setAmount(e.target.value)} />
          <br /><br />
          { !isPending && <button type="submit" className="submit">Submit</button>}
          { isPending && <button type="submit" className="submit" disabled>Generating Prompts...</button>}
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
    </div>
  );
};