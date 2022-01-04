import './profile.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div>
            <h1>PROFILE</h1>
            <Link to='/main'>Go back</Link>
        </div>
    )
}

export default Profile
