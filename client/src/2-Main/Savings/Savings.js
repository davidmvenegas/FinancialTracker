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
                    <div class="savings-progress-wrapper">
                        <span class="savings-progress" id="savings-progress"></span>
                    </div>
                    <form className="add-to-savings-form">
                        <input type="number"  placeholder='$' required/>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
            <div className="savings-form-container">
                <form className="savings-form">
                    <input type="text" placeholder='Title...'/>
                    <input type="textarea" placeholder='Notes...' />
                    <input type="number" placeholder='Amount...' />
                    <input type="date"/>
                    <button type="submit">Create Goal</button>
                </form>
            </div>
            <div className="savings-body">
                <div className="savings-card">
                    <div className="savings-card-wrapper">
                        <h1 className="savings-card-title">SAVING_TITLE</h1>
                        <p className='savings-card-notes'>Lorem, ipsum dolor sit 
                            amet adipisicing elit. Maiores cum ex nihil 
                            magni  iste labore sequi at vel possimus.</p>
                        <div className="savings-card-date-box">
                            <h2>Target Date:</h2>
                            <h4>05/01/2022</h4>
                        </div>
                        <div className="savings-card-percent-box">
                            <h2>Completion:</h2>
                            <h4>%55</h4> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Savings
