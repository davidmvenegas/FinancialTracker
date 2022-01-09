import './header.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFinanceContext } from '../FinanceContext'
import axios from 'axios'
import Logo from '../images/logo.png'
import UserIcon from '../images/profile_icon.png'

function Header() {
    const { handleLogout } = useFinanceContext()
    const navigate = useNavigate()

    function handleLogoutClick() {
        axios.delete('/logout', { withCredentials: true })
        .then(() => handleLogout())
        .catch(err => console.error(err))
        navigate('/landing')
    }

    return (
        <div>
            <div className="header-container">
                <Link to='/main' className='nav-back'>
                    <div className="header-box1">
                        <img src={Logo} alt="Logo" />
                        <h2>The Financial Tracker <span>&reg;</span></h2>
                    </div>
                </Link>
                <div className="header-box2">
                    <Link to='/profile'><img className='header-profile' src={UserIcon} alt="Profile" /></Link>
                    <button className='header-logout' onClick={() => handleLogoutClick()}>LOG OUT</button>
                </div>
            </div>
        </div>
    )
}

export default Header
