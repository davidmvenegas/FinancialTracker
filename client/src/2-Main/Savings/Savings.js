import './savings.css'
import React from 'react'

function Savings() {
    return (
        <div className='savings-container'>
            <div className="savings-header">
                <div className="savings-header-box1">
                    <h1 className='main-section-title'>Saving Goals</h1>
                    <p className='main-section-description'>Save for the Future</p>
                </div>
                <div className="savings-header-box2">
                    <h2 className='savings-category-title'>My Savings Goal: ($1,200 of $5,000)</h2>
                    <div className="savings-category-amount">------------------</div>
                </div>
            </div>
            <div className="savings-form-container">
                <form className="savings-form">
                    <input type="text" />
                    <input type="textarea" />
                    <input type="number" />
                    <input type="date" />
                    <button type="submit">Create Goal</button>
                </form>
            </div>
            <div className="savings-body">
                <div className="savings-card">
                    <h1 className="savings-card-title">SAVING_TITLE</h1>
                    <p className='savings-card-notes'>Lorem, ipsum dolor sit 
                    amet consectetur adipisicing elit. Maiores cum ex nihil 
                    magni velit iste labore sequi at vel possimus.</p>
                    <h2 className='savings-percentage'>%33</h2>
                    <h2 className='savings-target-date'>05/01/2022</h2>
                </div>
            </div>
        </div>
    )
}

export default Savings
