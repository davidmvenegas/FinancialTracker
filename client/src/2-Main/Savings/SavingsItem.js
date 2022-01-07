import React from 'react'

function SavingsItem() {
    return (
        <div tabIndex="0" className="savings-card">
            <div className="savings-card-wrapper">
                <h1 className="savings-card-title">SAVING_TITLE</h1>
                <form className="add-to-savings-form">
                    <input type="number"  placeholder='$' required/>
                    <button type="submit">Add</button>
                </form>
                <div className="savings-card-date-box">
                    <h2>Target Date:</h2>
                    <h4>05/01/2022</h4>
                </div>
                <div className="savings-card-percent-box">
                    <h2>Completion:</h2>
                    <h4>55%</h4> 
                </div>
            </div>
        </div>
    )
}

export default SavingsItem
