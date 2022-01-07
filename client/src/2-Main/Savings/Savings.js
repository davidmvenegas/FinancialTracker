import './savings.css'
import React from 'react'
import SavingsItem from './SavingsItem'

function Savings() {
    return (
        <div className='savings-container'>
            <div className="savings-header">
                <div className="savings-header-box1">
                    <h1 className='main-section-title'>My Saving Goals</h1>
                    <p className='main-section-description'>Save for the Future</p>
                </div>
                <div className="savings-header-box2">
                    <div className="savings-progress-container">
                        <h2 className='savings-category-title'>My Savings Goal: <span>($1,200 of $5,000)</span></h2>
                        <div className="savings-progress-wrapper">
                            <span className="savings-progress" id="savings-progress"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="savings-form-container">
                <form className='income-search-form'>
                    <input className='income-search-box' type="text" placeholder='Search' />
                </form>
                <form className="savings-form">
                    <input id='first-saving-form' type="text" placeholder='Title...'/>
                    <input type="number" placeholder='Amount...' />
                    <input className='input-type-date' id='last-saving-form' type="date"/>
                    <button type="submit">Create Goal</button>
                </form>
            </div>
            <div className="savings-body">
                <SavingsItem/>
                <SavingsItem/>
                <SavingsItem/>
                <SavingsItem/>
                <SavingsItem/>
                <SavingsItem/>
                <SavingsItem/>
            </div>
        </div>
    )
}

export default Savings
