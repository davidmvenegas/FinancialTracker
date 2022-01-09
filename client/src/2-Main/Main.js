import './main.css'
import React from 'react'
import Income from './Income/Income'
import Budget from './Budget/Budget'
import Savings from './Savings/Savings'

function Main() {
    return (
        <div>
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