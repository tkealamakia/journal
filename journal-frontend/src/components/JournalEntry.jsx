export const JournalEntry = ({ entry }) => {

  const formatDate = () => {
    if (entry.createdAt) {
      const date = new Date(entry.createdAt);
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    
    return 'No date available';
  };


  return (
    <div className="journal-entry">
      <h3>{entry.title}</h3>
      <p>{entry.content}</p>
      <small>Created: {formatDate()}</small>
    </div>
  );
};