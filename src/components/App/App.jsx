import React, { useState } from 'react';
import logo from "./../../assets/logo.png";

import './App.css';
import { HomeScreen } from '../HomeScreen/HomeScreen.jsx';
import { PromptGenerator } from '../PromptGenerator/PromptGenerator.jsx';
import { GrammerChecker } from '../GrammerChecker/GrammerChecker.jsx';
import { Thesaurus } from '../Thesaurus/Thesaurus.jsx';
import { WordGenerator } from '../WordGenerator/WordGenerator.jsx';
import { Dictionary } from '../Dictionary/Dictionary.jsx';
import { Search } from '../Search/Search.jsx';
import { IdeaStorage } from '../IdeaStorage/IdeaStorage.jsx';

export default function App() {
  // Add const for saving the previous 10 users backend requests
  const [isPromptGenerator, setIsPromptGenerator] = useState(false);
  const [isGrammerChecker, setIsGrammerChecker] = useState(false);
  const [isThesaurus, setIsThesaurus] = useState(false);
  const [isWordGenerator, setIsWordGenerator] = useState(false);
  const [isDictionary, setIsDictionary] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isIdeaStorage, setIsIdeaStorage] = useState(false);

  const handleButtonClick = (buttonType) => {
    // Reset all flags to false
    setIsPromptGenerator(false);
    setIsGrammerChecker(false);
    setIsThesaurus(false);
    setIsWordGenerator(false);
    setIsDictionary(false);
    setIsSearch(false);
    setIsIdeaStorage(false);
    // setIsPoemStorage(false);  ai assistant tool while writing the poems

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
    } else if (buttonType === 'Search') {
      setIsSearch(true);
    } else if (buttonType === 'IdeaStorage') {
      setIsIdeaStorage(true);
    }
  };

  return (
    <div className="App">
      <hr></hr>
      <div className="header">
        <h1>Poem Assistant</h1>
        <img src={logo} alt="Logo" />
      </div>
      <div className="button-container">
        <button onClick={() => handleButtonClick('PromptGenerator')}>Prompt Generator</button>
        <button onClick={() => handleButtonClick('GrammerChecker')}>Grammar Checker</button>
        <button onClick={() => handleButtonClick('Thesaurus')}>Thesaurus</button>
        <button onClick={() => handleButtonClick('WordGenerator')}>Word Generator</button>
        <button onClick={() => window.open("https://chat.openai.com/?model=text-davinci-002-render-sha", "_blank")}>Link to ChatGPT</button>
        <button onClick={() => handleButtonClick('Dictionary')}>Dictionary</button>
        <button onClick={() => handleButtonClick('Search')}>General Search</button>
        <button onClick={() => handleButtonClick('IdeaStorage')}>Idea Storage</button>
      </div>
      {isPromptGenerator && <PromptGenerator />}
      {isGrammerChecker && <GrammerChecker />}
      {isThesaurus && <Thesaurus />}
      {isWordGenerator && <WordGenerator />}
      {isDictionary && <Dictionary />}
      {isSearch && <Search/>}
      {isIdeaStorage && <IdeaStorage />}
      {!isPromptGenerator && !isGrammerChecker && !isThesaurus && !isWordGenerator && !isDictionary && !isSearch && !isIdeaStorage && <HomeScreen />}
    </div>
  );
}