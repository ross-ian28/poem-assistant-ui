// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';
import HomeScreen from './../HomeScreen/HomeScreen.jsx'

export default function App() {
  const [isPromptGenerator, setIsPromptGenerator] = useState(false);
  const [isGrammerChecker, setIsGrammerChecker] = useState(false);
  const [isThesaurus, setIsThesaurus] = useState(false);
  const [isWordGenerator, setIsWordGenerator] = useState(false);

  const handleButtonClick = (buttonType) => {
    // Reset all flags to false
    setIsPromptGenerator(false);
    setIsGrammerChecker(false);
    setIsThesaurus(false);
    setIsWordGenerator(false);

    // Set the flag based on the buttonType
    if (buttonType === 'PromptGenerator') {
      setIsPromptGenerator(true);
    } else if (buttonType === 'GrammerChecker') {
      setIsGrammerChecker(true);
    } else if (buttonType === 'Thesaurus') {
      setIsThesaurus(true);
    } else if (buttonType === 'WordGenerator') {
      setIsWordGenerator(true);
  }
  };

  return (
    <div className="App">
      <div className="button-container">
        <button onClick={() => handleButtonClick('PromptGenerator')}>Prompt Generator</button>
        <button onClick={() => handleButtonClick('GrammerChecker')}>Grammar Checker</button>
        <button onClick={() => handleButtonClick('Thesaurus')}>Thesaurus</button>
        <button onClick={() => handleButtonClick('WordGenerator')}>Word generator</button>
        <a><button>Link to ChatGPT</button></a>
        <button>Language translator</button>
      </div>
      <div className="header">
        <h1>Poem Assistant</h1>
      </div>
      <hr></hr>
      {/* conditional rendering */}
      {isPromptGenerator && <PromptGenerator />}
      {isGrammerChecker && <GrammerChecker />}
      {isThesaurus && <Thesaurus />}
      {isWordGenerator && <WordGenerator />}
      {!isPromptGenerator && !isGrammerChecker && !isThesaurus && !isWordGenerator && <HomeScreen />}
    </div>
  );
}

export const PromptGenerator = () => {
  const [amount, setAmount] = useState(0);
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/prompt-generator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
      })
      .catch((error) => console.error("there is an error", error));
  };

  return (
    <div className="form">
      <h3>Prompt Generator</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity">How many poem prompts do you want:</label>
        <input type="number" id="quantity" name="quantity" min="1" onChange={(e) => setAmount(e.target.value)} />
        <br /><br />
        <input type="submit" />
      </form>
      <div id="response">{response}</div>
    </div>
  );
};

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

export const WordGenerator = () => {
  const [word, setAmount] = useState(0);
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <input type="submit" />
      </form>
      <div id="response">{response}</div>
    </div>
  );
};