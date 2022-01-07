import React from 'react'

function SavingsItem({data}) {
    const targetAmount = data.target_amount
    const currentAmount = data.current_amount
    const percentage = (100 * currentAmount) / targetAmount

    console.log(data)
    return (
        <div tabIndex="0" className="savings-card">
            <div className="savings-card-wrapper">
                <h1 className="savings-card-title">{data.name}</h1>
                <form className="add-to-savings-form">
                    <input type="number"  placeholder='$' required/>
                    <button type="submit">Add</button>
                </form>
                <div className="savings-card-date-box">
                    <h2>Target Date:</h2>
                    <h4>{data.target_date}</h4>
                </div>
                <div className="savings-card-percent-box">
                    <h2>Completion:</h2>
                    <h4>{percentage}%</h4> 
                </div>
            </div>
        </div>
    )
}

export default SavingsItem
