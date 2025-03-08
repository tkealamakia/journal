import React from 'react';

export const JournalEntry = ({ entry }) => {
  return (
    <div className="journal-entry">
      <h3>{entry.title}</h3>
      <p>{entry.content}</p>
      <small>{new Date(entry.createdAt).toLocaleDateString()}</small>
    </div>
  );
};