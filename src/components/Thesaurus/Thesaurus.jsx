import React, { useState } from 'react';
import axios from 'axios';

export const Thesaurus = () => {
  const [word, setWord] = useState('');
  const [response, setResponse] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    const headers = {
      'Content-Type': 'application/json'   
    };

    const requestBody = {
      word: word
    };

    axios.post('https://poem-assistant-api.onrender.com/thesaurus', requestBody, { headers })
      .then(response => {
        setResponse(response.data.message);
        setIsPending(false);
      })
      .catch(error => {
        console.error("there is an error", error)
      });
  };

  return (
    <div className="form">
      <h3>Thesaurus</h3>
      <form className="poem-form" onSubmit={handleSubmit}>
        <label htmlFor="quantity">What word would you like to check:</label>
        <input type="text" id="word" name="word" onChange={(e) => setWord(e.target.value)}/>
        <br /><br />
        { !isPending && <button type="submit" className="submit">Submit</button>}
        { isPending && <button type="submit" className="submit" disabled>Finding words...</button>}
      </form>
      { response && (
        <div className="response-container">
          <div className="response">{response}</div>
        </div>
      )}
    </div>
  );
};