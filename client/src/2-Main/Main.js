import React from 'react'
import { Link } from 'react-router-dom'
import { useFinanceContext } from '../FinanceContext'

function Main() {
    const { loggedInStatus } = useFinanceContext()

    return (
        <div>
            <h1>MAIN PAGE</h1>
            <p>Status: {loggedInStatus}</p>
            <Link to='/'>Go back</Link>
            <br />
            <Link to='/profile'>Go to Profile</Link>
        </div>
    )
}

export default Main
