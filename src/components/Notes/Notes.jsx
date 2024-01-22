import React, { useState, useEffect } from 'react';

export const Notes = (props) => {
  const [notes, setNotes] = useState('login');
  const [error, setError] = useState('');

  useEffect(() => {
    renderNotes();
  }, [props]);

  const renderNotes = async (e) => {
    try {
      const response = await fetch('http://localhost:8080/notes', {
      // const response = await fetch('https://poem-assistant-api.onrender.com/notes', {
        credentials: 'include', 
      });

      if (response.ok) {
        const data = await response.json();
        setNotes(data);
      } else {
        props.onFormSwitch('login')
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }

  const handleLogout = async (e) => {
  }

  return (
    <div>
    <h2>Notes</h2>
    {error && <p>{error}</p>}
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.content}</li>
      ))}
    </ul>
    <button onClick={handleLogout}>Logout</button>
  </div>
  );
};