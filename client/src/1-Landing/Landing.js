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

    const loginBtn = document.querySelectorAll(".login-btn")
    const registerBtn = document.querySelectorAll(".register-btn")
    const lostPassBtn = document.querySelectorAll(".lost-pass-btn")
    const box = document.querySelector(".box")
    const loginForm = document.querySelector(".login-form")
    const registerForm = document.querySelector(".register-form")
    const lostPasswordForm = document.querySelector(".lost-password-form")

    registerBtn.forEach((btn) =>{
        btn.addEventListener("click", () => {
            box.classList.add("slide-active")
            registerForm.classList.remove("form-hidden")
            loginForm.classList.add("form-hidden")
            lostPasswordForm.classList.add("form-hidden")
        })
    })
    loginBtn.forEach((btn) =>{
        btn.addEventListener("click", () => {
            box.classList.remove("slide-active")
            registerForm.classList.add("form-hidden")
            loginForm.classList.remove("form-hidden")
            lostPasswordForm.classList.add("form-hidden")
        })
    })
    lostPassBtn.forEach((btn) =>{
        btn.addEventListener("click", () => {
            registerForm.classList.add("form-hidden")
            loginForm.classList.add("form-hidden")
            lostPasswordForm.classList.remove("form-hidden")
        })
    })

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
            <p>Status: {loggedInStatus}</p>
            <Link to='/main'>Go to Main</Link>
            <div className="login-page">
                <div className="box">
                    <div className="left">
                        <h3>Create Account</h3>
                        <button type="button" className="register-btn">Register</button>
                    </div>
                    <div className="right">
                        <h3>Have an Account ?</h3>
                        <button type="button" className="login-btn">Login</button>
                    </div>
                    <div className="form">
                        <form onSubmit={handleLogSubmit} className="login-form">
                            <h3>Log In</h3>
                            <div className="form-group">
                                <input onChange={handleLogEmailChange} type="text" placeholder="Email Address" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <div className="form-group">
                                <input onChange={handleLogPasswordChange} type="password" placeholder="Password" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <button type="submit" className="submit-btn">Login</button>
                            <p className="lost-pass-btn">Lost Your Password ?</p>
                        </form>
                        <form onSubmit={handleRegSubmit} className="register-form form-hidden">
                            <h3>Register</h3>
                            <div className="form-group">
                                <input type="text" placeholder="Name" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <div className="form-group">
                                <input onChange={handleRegEmailChange} type="email" placeholder="Email Address" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <div className="form-group">
                                <input onChange={handleRegPasswordChange} type="password" placeholder="Password" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <div className="form-group">
                                <input onChange={handlePasswordConfirmationChange} type="password" placeholder="Confirm Password" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <button type="submit" className="submit-btn">Register</button>
                            <p className="lost-pass-btn">Lost Your Password ?</p>
                        </form>
                        <form className="lost-password-form form-hidden">
                            <h3>Lost Your Password ?</h3>
                            <h5>You will receive a link to create a new password via email.</h5>
                            <div className="form-group">
                                <input type="text" placeholder="Email Address" className="form-control" required />
                            </div>
                            <button type="submit" className="submit-btn">Reset Password</button>
                            <p><span className="login-btn">Login</span> | <span className="register-btn">Register</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing
