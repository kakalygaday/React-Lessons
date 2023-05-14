import React, { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleRememberChange = (event) => {
        setRemember(event.target.checked);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password, remember);
        console.log(`Username: ${username}, Password: ${password}, Remember me: ${remember}`);

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <label>
                    Remember me:
                    <input type="checkbox" checked={remember} onChange={handleRememberChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
