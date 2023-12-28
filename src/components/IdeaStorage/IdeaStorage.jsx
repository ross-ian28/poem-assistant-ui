import React, { useState } from 'react';
import { Register } from '.././Register/Register.jsx';
import { Login } from '.././Login/Login.jsx';
import { Notes } from '.././Notes/Notes.jsx';

export const IdeaStorage  = () => {
    const [currentPage, setCurrentPage] = useState('login');

    const togglePage = (pageName) => {
        setCurrentPage(pageName);
    }

    return (
      <div>
        <h2>Idea Storage</h2>
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