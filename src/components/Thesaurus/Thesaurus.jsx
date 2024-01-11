import React, { useState } from 'react';
import axios from 'axios';

export const Thesaurus = () => {
  const [word, setWord] = useState('');
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
      word: word
    };

    await axios.post('https://poem-assistant-api.onrender.com/thesaurus', requestBody, { headers })
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
      <h3>Thesaurus</h3>
      <form className="poem-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="your word here" id="word" name="word" onChange={(e) => setWord(e.target.value)}/>
        <br /><br />
        { !isPending && <button className="submit">Submit</button>}
        { isPending && <button className="submitting" disabled>Finding words</button>}
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