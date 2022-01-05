import './budget.css'
import React from 'react'

function Budget() {
    return (
        <div className='budget-container'>
            <div className="budget-header">
                <div className="budget-header-box1">
                    <h1 className='main-section-title'>Monthly Budget</h1>
                    <p className='main-section-description'>Follow your Expenses</p>
                </div>
                <div className="budget-header-box2">
                    <h2 className='budget-category-title'>Categories</h2>
                    <div className="budget-category-item">--------------</div>
                </div>
                <div className="budget-header-box3">
                    <h2 className='budget-outline-title'>This Month:</h2>
                    <h4 className="budget-outline-item">Savings: <span>$4,000</span></h4>
                    <h4 className="budget-outline-item">Expenses: <span>$2,000</span></h4>
                    <h4 className="budget-outline-item">Total: <span>$2,000</span></h4>
                </div>
            </div>
            <div className="budget-body">
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Amount Spent</th>
                    </tr>
                    <tr>
                        <td>Food</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Housing</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Transportation</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Personal Care</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Education</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Entertainment</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>$0</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Budget
