import React, { useState } from 'react';

export const Thesaurus = () => {
    const [word, setWord] = useState('');
    const [response, setResponse] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:3001/thesaurus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word }),
      })
        .then((res) => res.json())
        .then((data) => {
          setResponse(data.message);
        })
        .catch((error) => console.error("there is an error", error));
    };
  
    return (
      <div className="form">
        <h3>Thesaurus</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="quantity">What word would you like to check:</label>
          <input type="text" id="word" name="word" onChange={(e) => setWord(e.target.value)}/>
          <br /><br />
          <input type="submit" />
        </form>
        <div id="response">{response}</div>
      </div>
    );
  };