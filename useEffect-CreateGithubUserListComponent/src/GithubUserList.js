import React, { useState } from 'react'
import GithubUser from './GithubUser'

export default function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddUser = () => {
    setUsernames([...usernames, inputValue]);
    setInputValue("");
  };
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      {usernames.map((username) => (
        <GithubUser username={username} key={username} />
      ))}
    </div>
  )
}
