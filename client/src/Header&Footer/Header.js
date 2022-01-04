import './header.css'
import React from 'react'
import { useFinanceContext } from '../FinanceContext'
import axios from 'axios'

function Header({ onLogout }) {
    const { handleLogout } = useFinanceContext()

    function handleLogoutClick() {
        axios.delete('http://localhost:3000/logout', { withCredentials: true })
        .then(() => handleLogout())
        .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>HEADER</h1>
            <button onClick={() => handleLogoutClick()}>Logout</button>
        </div>
    )
}

export default Header
