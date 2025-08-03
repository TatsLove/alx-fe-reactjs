// src/services/githubService.js
import axios from 'axios';

export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

export async function fetchAdvancedUserData(query) {
  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  return response.data.items;
}
