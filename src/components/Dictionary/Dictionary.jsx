import React, { useState } from 'react';

export const Dictionary = () => {
    const [word, setWord] = useState('');
    const [response, setResponse] = useState('');
    const [isPending, setIsPending] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsPending(true);

      fetch('https://poem-assistant-api.onrender.com/dictionary', {
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
        <h3>Dictionary</h3>
        <form className="poem-form" onSubmit={handleSubmit}>
          <label htmlFor="quantity">What word would you like to find the definition of:</label>
          <input type="text" id="word" name="word" onChange={(e) => setWord(e.target.value)}/>
          <br /><br />
          { !isPending && <button type="submit" className="submit">Submit</button>}
          { isPending && <button type="submit" className="submit" disabled>Finding definition...</button>}
        </form>
        { response && (
          <div className="response-container">
            <div className="response">{response}</div>
          </div>
        )}
      </div>
    );
  };