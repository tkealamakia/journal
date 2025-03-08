import React, { useEffect, useState } from 'react';
import { JournalList } from '../components/JournalList';
import { fetchJournalEntries } from '../services/api';

export const HomePage = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const data = await fetchJournalEntries();
        setEntries(data);
      } catch (err) {
        setError('Failed to load journal entries');
      } finally {
        setLoading(false);
      }
    };

    loadEntries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="home-page">
      <h1>My Journal Entries</h1>
      <JournalList entries={entries} />
    </div>
  );
};