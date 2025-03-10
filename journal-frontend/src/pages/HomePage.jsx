import { useState, useEffect } from 'react';
import JournalEntryForm from '../components/JournalEntryForm';
import { JournalEntry } from '../components/JournalEntry';
import './HomePage.css';

export const HomePage = () => {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchEntries = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/entries');
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      }
    } catch (error) {
      console.error('Error fetching entries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="home-container">
      <div className="header-container">
        <h1 className="page-title">My Journal Entries</h1>
        <button
          onClick={() => setShowForm(true)}
          className="add-entry-button"
        >
          Add New Entry
        </button>
      </div>

      {loading ? (
        <p>Loading entries...</p>
      ) : entries.length === 0 ? (
        <p>No entries yet. Create your first entry!</p>
      ) : (
        <div className="entries-grid">
          {entries.map((entry) => (
            <JournalEntry key={entry.id} entry={entry} />
          ))}
        </div>
      )}

      {showForm && (
        <JournalEntryForm
          onClose={() => setShowForm(false)}
          onSubmitSuccess={fetchEntries}
        />
      )}
    </div>
  );
};