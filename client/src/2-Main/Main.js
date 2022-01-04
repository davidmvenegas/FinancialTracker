import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div>
            <h1>MAIN PAGE</h1>
            <Link to='/'>Go back</Link>
            <br />
            <Link to='/profile'>Go to Profile</Link>
        </div>
    )
}

export default Main
