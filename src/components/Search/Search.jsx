import React, { useState } from 'react';
import axios from 'axios';

export const Search = () => {
	const [question, setQuestion] = useState('');
	const [response, setResponse] = useState('');
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPending(true);
		setError('');

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
				<input type="text" placeholder="your question here" id="word" name="word" onChange={(e) => setQuestion(e.target.value)}/>
				<br /><br />
				{ !isPending && <button className="submit">Submit</button>}
				{ isPending && <button className="submitting" disabled>Answering question</button>}
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