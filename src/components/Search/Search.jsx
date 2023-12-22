import React, { useState } from 'react';
import axios from 'axios';

export const Search = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [isPending, setIsPending] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsPending(true);

      const headers = {
        'Content-Type': 'application/json'   
      };

      const requestBody = {
        question: question
      };

      axios.post('https://poem-assistant-api.onrender.com/search', requestBody, { headers })
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