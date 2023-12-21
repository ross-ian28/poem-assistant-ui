import React, { useState } from 'react';

export const Search = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [isPending, setIsPending] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsPending(true);

      fetch('http://localhost:8080/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question }),
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
        <h3>General Search</h3>
        <form className="poem-form" onSubmit={handleSubmit}>
          <label htmlFor="quantity">What would you like to ask:</label>
          <input type="text" id="word" name="word" onChange={(e) => setQuestion(e.target.value)}/>
          <br /><br />
          { !isPending && <button type="submit" className="submit">Submit</button>}
          { isPending && <button type="submit" className="submit" disabled>Answering question...</button>}
        </form>
        { response && (
          <div className="response-container">
            <div className="response">{response}</div>
          </div>
        )}
      </div>
    );
  };