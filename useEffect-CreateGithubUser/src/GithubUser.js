import React, { useEffect, useState } from 'react';

export default function GithubUser(username) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`http://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => setUserData(data))
    .catch((error) => console.log(error));
    }, [username]);
    if (!userData) {
      return <p>Loading...</p>;
    }

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.bio}</p>
      <img src={userData.avatar_url} alt="User avatar" />
    </div>
  );
}
