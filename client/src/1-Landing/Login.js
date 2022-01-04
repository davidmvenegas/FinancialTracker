import './login.css'
import { React, useState } from 'react'
import axios from 'axios'
import { useFinanceContext } from '../FinanceContext'

function Login() {
    const { handleSuccesfulAuth } = useFinanceContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/sessions', {
            user: {
                email: email,
                password: password,
            }
        }, { withCredentials: true })
        .then(res => handleSuccesfulAuth(res.data))
        .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} placeholder='Email' onChange={handleEmailChange} required/>
            <br />
            <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} required/>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login