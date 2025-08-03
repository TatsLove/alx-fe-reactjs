// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const query = `${username ? `user:${username}` : ''} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`;
      const results = await fetchAdvancedUserData(query.trim());
      setUsers(results);
    } catch (err) {
      setError("Looks like we can't find matching users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4 space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          className="w-full p-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      {users.length > 0 && (
        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-100 p-4 rounded shadow flex items-center space-x-4">
              <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="font-bold">{user.login}</h2>
                <a href={user.html_url} className="text-blue-600" target="_blank" rel="noreferrer">GitHub Profile</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
