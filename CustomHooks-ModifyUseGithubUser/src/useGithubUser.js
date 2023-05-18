import { useState } from 'react';

const useGithubUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGithubUser = async (username) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setError(null);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, fetchGithubUser };
};

export default useGithubUser;
