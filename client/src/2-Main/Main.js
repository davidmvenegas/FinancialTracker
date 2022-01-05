import './main.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useFinanceContext } from '../FinanceContext'

function Main() {
    const { loggedInStatus } = useFinanceContext()

    return (
        <div>
            <div className="main-container">
                <h1>MAIN PAGE</h1>
                <p>Status: {loggedInStatus}</p>
                <Link to='/'>Go back</Link>
            </div>
        </div>
    )
}

export default Main
