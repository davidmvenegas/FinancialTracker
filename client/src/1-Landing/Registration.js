import './registration.css'
import { React, useState } from 'react'
import axios from 'axios'
import { useFinanceContext } from '../FinanceContext'

function Registration() {
    const { handleSuccesfulAuth } = useFinanceContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handlePasswordConfirmationChange = (e) => setPasswordConfirmation(e.target.value)

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/registrations', {
            user: {
                email: email,
                password: password,
                passwordConfirmation: passwordConfirmation
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
            <br />
            <input type="password" value={passwordConfirmation} placeholder='Password Confirmation' onChange={handlePasswordConfirmationChange} required/>
            <button type="submit">Signup</button>
        </form>
    )
}

export default Registration