const API_BASE_URL = 'http://localhost:8080/api';

export const fetchJournalEntries = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/entries`);
    if (!response.ok) {
      throw new Error('Failed to fetch journal entries');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw error;
  }
};