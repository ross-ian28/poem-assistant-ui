import React, { useState } from 'react';
import logo from "./../../assets/logo.png";

import './App.css';
import { HomeScreen } from '../HomeScreen/HomeScreen.jsx';
import { PromptGenerator } from '../PromptGenerator/PromptGenerator.jsx';
import { GrammerChecker } from '../GrammerChecker/GrammerChecker.jsx';
import { Thesaurus } from '../Thesaurus/Thesaurus.jsx';
import { WordGenerator } from '../WordGenerator/WordGenerator.jsx';
import { Dictionary } from '../Dictionary/Dictionary.jsx';

export default function App() {
  const [isPromptGenerator, setIsPromptGenerator] = useState(false);
  const [isGrammerChecker, setIsGrammerChecker] = useState(false);
  const [isThesaurus, setIsThesaurus] = useState(false);
  const [isWordGenerator, setIsWordGenerator] = useState(false);
  const [isDictionary, setIsDictionary] = useState(false);

  const handleButtonClick = (buttonType) => {
    // Reset all flags to false
    setIsPromptGenerator(false);
    setIsGrammerChecker(false);
    setIsThesaurus(false);
    setIsWordGenerator(false);
    setIsDictionary(false);

    // Set the flag based on the buttonType
    if (buttonType === 'PromptGenerator') {
      setIsPromptGenerator(true);
    } else if (buttonType === 'GrammerChecker') {
      setIsGrammerChecker(true);
    } else if (buttonType === 'Thesaurus') {
      setIsThesaurus(true);
    } else if (buttonType === 'WordGenerator') {
      setIsWordGenerator(true);
    } else if (buttonType === 'Dictionary') {
      setIsDictionary(true);
  }
  };

  return (
    <div className="App">
      <div className="button-container">
        <button onClick={() => handleButtonClick('PromptGenerator')}>Prompt Generator</button>
        <button onClick={() => handleButtonClick('GrammerChecker')}>Grammar Checker</button>
        <button onClick={() => handleButtonClick('Thesaurus')}>Thesaurus</button>
        <button onClick={() => handleButtonClick('WordGenerator')}>Word Generator</button>
        <button onClick={() => window.open("https://chat.openai.com/?model=text-davinci-002-render-sha", "_blank")}>Link to ChatGPT</button>
        <button onClick={() => handleButtonClick('Dictionary')}>Dictionary</button>
        <button>Language Translator</button>
        <button>Idea Storage</button>
        <button>Coming Soon...</button>
      </div>
      <div className="header">
        <h1>Poem Assistant</h1>
        <img src={logo} alt="Logo" />
      </div>
      <hr></hr>
      {/* conditional rendering */}
      {isPromptGenerator && <PromptGenerator />}
      {isGrammerChecker && <GrammerChecker />}
      {isThesaurus && <Thesaurus />}
      {isWordGenerator && <WordGenerator />}
      {isDictionary && <Dictionary />}
      {!isPromptGenerator && !isGrammerChecker && !isThesaurus && !isWordGenerator && !isDictionary && <HomeScreen />}
    </div>
  );
}