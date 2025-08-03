import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchGitHubUser } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      const data = await fetchGitHubUser(username);
      setUser(data);
      setError('');
    } catch (err) {
      setUser(null);
      setError('User not found');
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserCard user={user} />
    </div>
  );
}

export default App;
