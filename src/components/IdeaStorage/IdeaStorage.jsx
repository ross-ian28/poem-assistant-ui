import React, { useState } from 'react';
import { Register } from '.././Register/Register.jsx';
import { Login } from '.././Login/Login.jsx';
import { Notes } from '.././Notes/Notes.jsx';

export const IdeaStorage  = () => {
    const [currentPage, setCurrentPage] = useState('notes');

    const togglePage = (pageName) => {
        setCurrentPage(pageName);
    }

    return (
      <div>
        <h3>Idea Storage</h3>
        
        <button onClick={() => togglePage('register')}>Register</button>
        <button onClick={() => togglePage('login')}>Login</button>

        {currentPage === 'notes' ? (
          <Notes onFormSwitch={togglePage} />
        ) : currentPage === 'register' ? (
          <Register onFormSwitch={togglePage} />
        ) : (
          <Login onFormSwitch={togglePage} />
        )}
      </div>
    );
};