import { useState } from 'react';
import './JournalEntryForm.css';

const JournalEntryForm = ({ onClose, onSubmitSuccess }) => {
  const [entry, setEntry] = useState({
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry)
      });
      
      if (response.ok) {
        setEntry({
          title: '',
          content: '',
          date: new Date().toISOString().split('T')[0]
        });
        onSubmitSuccess?.();
        onClose();
      }
    } catch (error) {
      console.error('Error saving entry:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="modal-overlay">
      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">New Journal Entry</h2>
          <button onClick={onClose} className="close-button">×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={entry.title}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content" className="form-label">Content:</label>
            <textarea
              id="content"
              name="content"
              value={entry.content}
              onChange={handleChange}
              className="form-input"
              rows="6"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date" className="form-label">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={entry.date}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="button-group">
            <button 
              type="submit"
              className="submit-button"
            >
              Save Entry
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JournalEntryForm;