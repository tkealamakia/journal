import React from 'react';
import { JournalEntry } from './JournalEntry';

export const JournalList = ({ entries }) => {
  return (
    <div className="journal-list">
      {entries.map(entry => (
        <JournalEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
};