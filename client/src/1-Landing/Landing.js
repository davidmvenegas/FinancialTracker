import { React, useState } from 'react'
import Login from './Login'
import Registration from './Registration'
import { Link } from 'react-router-dom'

function Landing() {
    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     fetch("/me").then((response) => {
    //         if (response.ok) response.json().then((user) => setUser(user))
    //     })
    // }, [])

    return (
        <div>
            <h1>LANDING PAGE</h1>
            {(user) ? <h2>Welcome, {user.username}!</h2> : <Login onLogin={setUser} />}
            <br />
            {(user) ? <h2>Welcome, {user.username}!</h2> : <Registration onLogin={setUser} />}
            <Link to='/main'>Go to Main</Link>
        </div>
    )
}
export default Landing
