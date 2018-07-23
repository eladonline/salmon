const reqPrefix = (path, data = false) => {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const keyPrefix = '&api_key=';
  const API_KEY = '87dfa1c669eea853da609d4968d294be';

  const url = data ? `search/multi?query=${data}` : path;

  return `${BASE_URL}${url}${keyPrefix}${API_KEY}`;
};

export default reqPrefix;
