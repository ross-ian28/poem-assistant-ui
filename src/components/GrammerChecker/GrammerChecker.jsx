import React, { useState } from 'react';

export const Thesaurus = () => {
    const [word, setWord] = useState('');
    const [response, setResponse] = useState('');
    const [isPending, setIsPending] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsPending(true);

      fetch('https://poem-assistant-api.onrender.com/thesaurus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word: word }),
      })
        .then((res) => res.json())
        .then((data) => {
          setResponse(data.message);
          setIsPending(false);
        })
        .catch((error) => console.error("there is an error", error));
    };
  
    return (
      <div className="form">
        <h3>Thesaurus</h3>
        <form className="poem-form" onSubmit={handleSubmit}>
          <label htmlFor="quantity">What word would you like to check:</label>
          <input type="text" id="word" name="word" onChange={(e) => setWord(e.target.value)}/>
          <br /><br />
          { !isPending && <button type="submit">Submit</button>}
          { isPending && <button type="submit" disabled>Finding words...</button>}
        </form>
        <div id="response">{response}</div>
      </div>
    );
  };