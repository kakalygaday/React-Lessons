import './App.css';
import useGithubUser from './useGithubUser';
import GithubUser from './GithubUser';

const App = () => {
  const { user, loading, error, fetchGithubUser } = useGithubUser();

  const handleFetchUser = () => {
    fetchGithubUser('abdy');
  };

  return (
    <div className="App">
      <h1>Github User Information</h1>
      <button onClick={handleFetchUser}>Fetch User</button>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : user ? (
        <GithubUser user={user} />
      ) : null}
    </div>
  );
};

export default App;


