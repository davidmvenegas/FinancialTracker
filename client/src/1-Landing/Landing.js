import { React } from 'react'
import { Link } from 'react-router-dom'
import { useFinanceContext } from '../FinanceContext'
import Registration from './Registration'
import Login from './Login'

function Landing() {
    const { loggedInStatus } = useFinanceContext()

    return (
        <div>
            <h1>LANDING PAGE</h1>
            <p>Status: {loggedInStatus}</p>
            <h1>REGISTER</h1>
            <Registration/>
            <h1>LOGIN</h1>
            <Login/>
            <Link to='/main'>Go to Main</Link>
        </div>
    )
}
export default Landing
