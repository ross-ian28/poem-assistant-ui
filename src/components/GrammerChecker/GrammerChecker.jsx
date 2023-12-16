import React, { useState } from 'react';

export const GrammerChecker = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [isPending, setIsPending] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsPending(true);
      fetch('https://poem-assistant-api.onrender.com/grammer-checker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
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
          <h3>Grammer Checker</h3>
            <form className="form-container" onSubmit={handleSubmit}>
              <textarea
                value={message}
                placeholder="Add text here"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              { !isPending && <button type="submit" className="submit">Submit</button>}
              { isPending && <button type="submit" className="submit" disabled>Checking Grammer...</button>}
            <br />
            </form>
          { response && (
            <div className="response-container">
              <div className="response">{response}</div>
            </div>
          )}
      </div>
    );
  };