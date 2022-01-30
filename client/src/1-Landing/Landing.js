import './landing.css'
import { React, useState } from 'react'
import { useFinanceContext } from '../FinanceContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import Logo from '../images/logo.png'
import Particles from "react-tsparticles";

function Landing() {
    const navigate = useNavigate()
    const { handleSuccesfulAuth, handleSuccesfulLog } = useFinanceContext()
    const [logEmail, setLogEmail] = useState("")
    const [logPassword, setLogPassword] = useState("")
    const [regEmail, setRegEmail] = useState("")
    const [username, setUsername] = useState("")
    const [regPassword, setRegPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [boxSlide, setBoxSlide] = useState('')
    const [logSlide, setLogSlide] = useState('')
    const [regSlide, setRegSlide] = useState('form-hidden')
    const [passSlide, setPassSlide] = useState('form-hidden')
    const [reset, setReset] = useState('')

    const handleResetChange = (e) => setReset(e.target.value)
    const handleLogEmailChange = (e) => setLogEmail(e.target.value)
    const handleLogPasswordChange = (e) => setLogPassword(e.target.value)
    const handleUsernameChange = (e) => setUsername(e.target.value)
    const handleRegEmailChange = (e) => setRegEmail(e.target.value)
    const handleRegPasswordChange = (e) => setRegPassword(e.target.value)
    const handlePasswordConfirmationChange = (e) => setPasswordConfirmation(e.target.value)

    function clickedRegisterBtn() {
        setBoxSlide('slide-active')
        setLogSlide('form-hidden')
        setPassSlide('form-hidden')
        setRegSlide('')
        clearLogForm()
    }
    function clickedLoginBtn() {
        setRegSlide('form-hidden')
        setPassSlide('form-hidden')
        setBoxSlide('')
        setLogSlide('')
        clearRegForm()
    }
    function clickedResetPassword() {
        setRegSlide('form-hidden')
        setLogSlide('form-hidden')
        setPassSlide('')
        clearLogForm()
        clearRegForm()
    }
    function clearRegForm() {
        setRegEmail('')
        setUsername('')
        setRegPassword('')
        setPasswordConfirmation('')
    }
    function clearLogForm() {
        setLogEmail('')
        setLogPassword('')
    }

    function handleRegSubmit(e) {
        e.preventDefault()
        if (regPassword !== passwordConfirmation) {
            swal("Oops!", "Passwords do not match! Please try again", "error")
        } else if (regPassword.length < 4) {
            swal("Oops!", "Password is weak! Please use something more secure", "error")
        } else {
            axios.post('/registrations', {
                user: {
                    username: username,
                    email: regEmail,
                    password: regPassword,
                    passwordConfirmation: passwordConfirmation
                }
            }, { withCredentials: true })
            .then(res => {
                handleSuccesfulAuth(res.data)
                navigate('/main')
            })
            .catch(() => swal("Oops!", "That email is already registered!", "error"))
        }
    }

    function handleLogSubmit(e) {
        e.preventDefault()
        axios.post('/sessions', {
            user: {
                email: logEmail,
                password: logPassword,
            }
        }, { withCredentials: true })
        .then(res => handlePendingLog(res))
        .catch((err) => console.log(err))
    }
    
    function handlePendingLog(res) {
        handleSuccesfulLog(res.data)
        if (res.data.status === 201) {
            navigate('/main')
        } else {
            swal("Oops!", "Wrong Password! Please try again or reset your password", "error")
        }
    }

    function handleReset(e) {
        e.preventDefault()
        swal("Email Reset", "Please check your email for further instructions", "success")
        setReset('')
    }

    return (
        <div>
        <Particles className='particleJS' options={{
            interactivity: {
                events: {onClick: {enable: true, mode: "push"},
                onHover: {enable: true, mode: "repulse"}},
                modes: {bubble: {distance: 800, duration: 2, opacity: 1, size: 500},
                push: {quantity: 4}, repulse: {distance: 75, duration: 1}
            }},
            particles: {
                color: {value: "#888"},
                links: {color: "#000", distance: 200, enable: true, opacity: .5, width: .125},
                move: {direction: "none", enable: true, outMode: "bounce", random: true, speed: 2.5, straight: false},
                number: {value: 50},
                opacity: {value: 1}
            }}}/>
            <div className="login-page">
                <div className="login-logo-box">
                    <div className="login-content-box">
                        <img src={Logo} alt="Logo" />
                        <h2>The Financial Tracker <span>&reg;</span></h2>
                    </div>
                </div>
                <div className={`box ${boxSlide}`}>
                    <div className="left">
                        <h3>Create Account</h3>
                        <button type="button" onClick={clickedRegisterBtn} className="register-btn">Register</button>
                    </div>
                    <div className="right">
                        <h3>Have an Account ?</h3>
                        <button type="button" className="login-btn" onClick={clickedLoginBtn} >Login</button>
                    </div>
                    <div className="form">
                        <form onSubmit={handleLogSubmit} className={`login-form ${logSlide}`}>
                            <h3>Log In</h3>
                            <div className="form-group">
                                <input onChange={handleLogEmailChange} value={logEmail} type="text" placeholder="Email Address" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <div className="form-group">
                                <input onChange={handleLogPasswordChange} value={logPassword} type="password" placeholder="Password" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <button type="submit" className="submit-btn">Login</button>
                            <p onClick={clickedResetPassword} className="lost-pass-btn">Lost Your Password ?</p>
                        </form>
                        <form onSubmit={handleRegSubmit} className={`register-form ${regSlide}`}>
                            <h3>Register</h3>
                            <div className="form-group">
                                <input onChange={handleUsernameChange} value={username} type="text" placeholder="Name" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <div className="form-group">
                                <input onChange={handleRegEmailChange} value={regEmail} type="email" placeholder="Email Address" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <div className="form-group">
                                <input onChange={handleRegPasswordChange} value={regPassword} type="password" placeholder="Password" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <div className="form-group">
                                <input onChange={handlePasswordConfirmationChange} value={passwordConfirmation} type="password" placeholder="Confirm Password" className="form-control" required />
                                <span className="landing-input-focus"></span>
                            </div>
                            <button type="submit" className="submit-btn">Register</button>
                            <p onClick={clickedResetPassword} className="lost-pass-btn">Lost Your Password ?</p>
                        </form>
                        <form onSubmit={handleReset} className={`lost-password-form ${passSlide}`}>
                            <h3 id='resetText'>Lost Your Password ?</h3>
                            <h5 id='resetText'>You will receive a link to create a new password via email.</h5>
                            <div className="form-group">
                                <input type="email" placeholder="Email Address" className="form-control" required onChange={handleResetChange} value={reset} />
                                <button type="submit" id='resetPaswordBtn' className="submit-btn">Reset Password</button>
                            </div>
                            <p><span className="login-btn" onClick={clickedLoginBtn} >Login</span> | <span onClick={clickedRegisterBtn} className="register-btn">Register</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing
