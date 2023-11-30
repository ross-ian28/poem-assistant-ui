import React, { useState } from 'react';

export const WordGenerator = () => {
    const [word, setAmount] = useState(0);
    const [response, setResponse] = useState('');
    const [isPending, setIsPending] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsPending(true);

      fetch('http://localhost:3001/word-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word }),
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
        <h3>Word Generator</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="quantity">How many words do you want:</label>
          <input type="number" id="quantity" name="quantity" min="1" onChange={(e) => setAmount(e.target.value)} />
          <br /><br />
          { !isPending && <button type="submit">Submit</button>}
          { isPending && <button type="submit" disabled>Generating words...</button>}
        </form>
        <div id="response">{response}</div>
      </div>
    );
  };