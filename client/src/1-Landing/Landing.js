import './landing.css'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFinanceContext } from '../FinanceContext'
import axios from 'axios'

function Landing() {
    const { loggedInStatus, handleSuccesfulAuth } = useFinanceContext()
    const [logEmail, setLogEmail] = useState("")
    const [logPassword, setLogPassword] = useState("")
    const [regEmail, setRegEmail] = useState("")
    const [regPassword, setRegPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleLogEmailChange = (e) => setLogEmail(e.target.value)
    const handleLogPasswordChange = (e) => setLogPassword(e.target.value)
    const handleRegEmailChange = (e) => setRegEmail(e.target.value)
    const handleRegPasswordChange = (e) => setRegPassword(e.target.value)
    const handlePasswordConfirmationChange = (e) => setPasswordConfirmation(e.target.value)

    function handleRegSubmit(e) {
        e.preventDefault()
        axios.post('/registrations', {
            user: {
                email: regEmail,
                password: regPassword,
                passwordConfirmation: passwordConfirmation
            }
        }, { withCredentials: true })
        .then(res => handleSuccesfulAuth(res.data))
        .catch(err => console.error(err))
    }

    function handleLogSubmit(e) {
        e.preventDefault()
        axios.post('/sessions', {
            user: {
                email: logEmail,
                password: logPassword,
            }
        }, { withCredentials: true })
        .then(res => handleSuccesfulAuth(res.data))
        .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>LANDING PAGE</h1>
            <p>Status: {loggedInStatus}</p>
            <Link to='/main'>Go to Main</Link>

            <form onSubmit={handleLogSubmit}></form>
            <form onSubmit={handleRegSubmit}></form>




        </div>
    )
}
export default Landing
