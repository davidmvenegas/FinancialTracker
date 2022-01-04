import { React, useState } from 'react'

function Signup({ onLogin }) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const user = { username, email, password }
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((r) => r.json())
        .then((user) => onLogin(user))
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Name:</p>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <p>Email:</p>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p>Password:</p>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Signup</button>
        </form>
    )
}

export default Signup
