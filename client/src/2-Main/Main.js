import './main.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useFinanceContext } from '../FinanceContext'
import Income from './Income/Income'
import Budget from './Budget/Budget'
import Savings from './Savings/Savings'

function Main() {
    const { loggedInStatus } = useFinanceContext()

    return (
        <div>
            <p>Status: {loggedInStatus}</p>
            <Link to='/'>Go back</Link>
            <div className="main-container">
                <Income/>
                <div className="main-separator"></div>
                <Budget/>
                <div className="main-separator"></div>
                <Savings/>
            </div>
        </div>
    )
}

export default Main
