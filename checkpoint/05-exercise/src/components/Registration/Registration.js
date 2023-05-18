import React, { useState } from 'react'


const Registration = () => {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleFirstNameChange = (event) => {
    //     setFirstName(event.target.value);
    // };
    // const handleLastNameChange = (event) => {
    //     setLastName(event.target.value);
    // };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPass(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, password);
    };
    const registerationForData = () => {
        name: name,
        email: email,
        password: password
    }
    fetch(`${process.env.REACT_APP_API_URL}users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerationForData()),
    })
        .then((response) => {
            response.json().then((json) => {
                if (json.success) {
                    register(json.token, json.data)
                    navigate('/')
                } else {
                    alert('Invalid Credentials')
                }
            })
        }).catch((e) => {
            console.log(e)
        })
};

// const registeration = () => {
//     fetch(`${process.env.REACT_APP_API_URL}users/register`, {
//         method: 'post',
//         body: JSON.stringify({
//             firstName: firstName.current.value,
//             lastName: lastName.current.value,
//             email: emailRef.current.value,
//             password: passwordRef.current.value,
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }).then((response) => {
//         response.json().then((json) => {
//             if (json.success) {
//                 register(json.token, json.data)
//                 navigate('/')
//             } else {
//                 alert('Invalid Credentials')
//             }
//         })
//     }).catch((e) => {
//         console.log(e)
//     })
// }

return (
    <div>
        <h2>Registration:</h2>
        <form onSubmit={handleSubmit}><br />
            <label>First Name:</label> <br />
            <input type="text" value={firstName} onChange={handleFirstNameChange} /><br />
            <label>Last Name:</label> <br />
            <input type="text" value={lastName} onChange={handleLastNameChange} /><br />
            <label>Email:</label> <br />
            <input type="text" value={email} onChange={handleEmailChange} /><br />
            <label>Password:</label> <br />
            <input type="text" value={password} onChange={handlePasswordChange} /><br />
            <button type='submit'>Register</button>
        </form>

    </div>
)
export default Registration;