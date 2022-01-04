import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div>
            <h1>MAIN PAGE</h1>
            <Link to='/profile'>Go to Profile</Link>
            <Link to='/'>Go to landing</Link>
        </div>
    )
}

export default Main
