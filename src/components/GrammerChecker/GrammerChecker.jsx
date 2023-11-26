import React, { useState } from 'react';

export const GrammerChecker = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:3001/grammer-checker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })
        .then((res) => res.json())
        .then((data) => {
          setResponse(data.message);
        })
        .catch((error) => console.error("there is an error", error));
    };
  
    return (
        <div className="form">
          <h3>Grammer Checker</h3>
          <form onSubmit={handleSubmit}>
            <textarea
              value={message}
              placeholder="Add the text you want checked"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          <button type="submit">Submit</button>
          <br />
          </form>
        <div id="response">{response}</div>
      </div>
    );
  };