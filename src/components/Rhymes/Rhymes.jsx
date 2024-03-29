import React, { useState } from 'react';
import axios from 'axios';

export const Rhymes = () => {
  const [word, setWord] = useState('');
  const [response, setResponse] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    setError('');

    const headers = {
      'Content-Type': 'application/json'   
    };
    const requestBody = {
      word: word
    };

    axios.post('https://poem-assistant-api.onrender.com/rhymes', requestBody, { headers })
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
      <h3>Rhyme Generator</h3>
      <form className="poem-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="your word here" id="word" name="word" onChange={(e) => setWord(e.target.value)}/>
        <br /><br />
        { !isPending && <button className="submit">Submit</button>}
        { isPending && <button className="submitting" disabled>Finding rhymes</button>}
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