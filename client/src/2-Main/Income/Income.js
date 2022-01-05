import './income.css'
import React from 'react'

function Income() {
    return (
        <div className='income-container'>
            <div className="income-header">
                <div className="income-header-box1">
                    <h1 className='main-section-title'>Income Tracker</h1>
                    <p className='main-section-description'>Keep Track of your Income</p>
                </div>
                <div className="income-header-box2">
                    <h2 className='income-category-title'>Savings</h2>
                    <div className="income-category-amount"><h2><span>$</span> 12,000</h2></div>
                </div>
                <div className="income-header-box3">
                    <h2 className='income-category-title'>Expenses</h2>
                    <div className="income-category-amount"><h2><span>$</span> 2,000</h2></div>
                </div>
                <div className="income-header-box4">
                    <h2 className='income-category-title'>Total Balance</h2>
                    <div className="income-category-amount"><h2><span>$</span> 10,000</h2></div>
                </div>
            </div>
            <div className="income-form-container">
                <form className="income-form">
                    <input className='income-form-header' type="text" placeholder='Description...' />
                    <input className='income-form-header' type="number" placeholder='Amount...' />
                    <select className="income-form-header">
                        <option disabled selected hidden>Category...</option>
                        <option value="food">Food</option>
                        <option value="housing">Housing</option>
                        <option value="transportation">Transportation</option>
                        <option value="personal_care">Personal Care</option>
                        <option value="education">Education</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="savings">Savings</option>
                        <option value="other">Other</option>
                    </select>
                    <button className='income-submit-button' type="submit">Add Transaction</button>
                </form>
            </div>
            <div className="income-body">
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Burger King</td>
                            <td>01/04/2022</td>
                            <td>$40</td>
                            <td>Food</td>
                        </tr>
                        <tr>
                            <td>Lululemon</td>
                            <td>01/12/2022</td>
                            <td>$100</td>
                            <td>Personal Care</td>
                        </tr>
                        <tr>
                            <td>Paycheck</td>
                            <td>01/14/2022</td>
                            <td>$2000</td>
                            <td>Savings</td>
                        </tr>
                        <tr>
                            <td>Paycheck</td>
                            <td>01/14/2022</td>
                            <td>$2000</td>
                            <td>Savings</td>
                        </tr>
                        <tr>
                            <td>Paycheck</td>
                            <td>01/14/2022</td>
                            <td>$2000</td>
                            <td>Savings</td>
                        </tr>
                        <tr>
                            <td>Paycheck</td>
                            <td>01/14/2022</td>
                            <td>$2000</td>
                            <td>Savings</td>
                        </tr>
                        <tr>
                            <td>Paycheck</td>
                            <td>01/14/2022</td>
                            <td>$2000</td>
                            <td>Savings</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Income
