import './budget.css'
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function Budget() {
    return (
        <div className='budget-container'>
            <div className="budget-header">
                <div className="budget-header-box1">
                    <h1 className='main-section-title'>Monthly Budget</h1>
                    <p className='main-section-description'>Keep Track of your Expenses</p>
                </div>
                <div className="budget-header-box2">
                    <PieChart className='budget-pie'
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                        animate={true}
                        labelPosition={50}
                        animationEasing="ease-out"
                    />
                </div>
                <div className="budget-header-box3">
                    <h2 className='budget-outline-title'>This Month...</h2>
                    <div className="budget-outline-wrapper">
                        <div className="budget-outline-item">
                            <h4 className="budget-outline-name">Total Budget:</h4>
                            <span className='budget-outline-amount'>$4,000</span>
                        </div>
                        <div className="budget-outline-item">
                            <h4 className="budget-outline-name">Spending:</h4>
                            <span className='budget-outline-amount'>$2,000</span>
                        </div>
                        <div className="budget-outline-separator"></div>
                        <div className="budget-outline-item">
                            <h4 className="budget-outline-name">Left over:</h4>
                            <span className='budget-outline-amount'>$2,000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="budget-body">
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Amount Spent</th>
                            <th>Amount Budgeted</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Food</td>
                            <td>$0</td>
                            <td>$<input className='budget-editable' type="number" placeholder='N/A' /></td>
                        </tr>
                        <tr>
                            <td>Housing</td>
                            <td>$0</td>
                            <td>$<input className='budget-editable' type="number" placeholder='N/A' /></td>
                        </tr>
                        <tr>
                            <td>Transportation</td>
                            <td>$0</td>
                            <td>$<input className='budget-editable' type="number" placeholder='N/A' /></td>
                        </tr>
                        <tr>
                            <td>Personal Care</td>
                            <td>$0</td>
                            <td>$<input className='budget-editable' type="number" placeholder='N/A' /></td>
                        </tr>
                        <tr>
                            <td>Education</td>
                            <td>$0</td>
                            <td>$<input className='budget-editable' type="number" placeholder='N/A' /></td>
                        </tr>
                        <tr>
                            <td>Entertainment</td>
                            <td>$0</td>
                            <td>$<input className='budget-editable' type="number" placeholder='N/A' /></td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td>$0</td>
                            <td>$<input className='budget-editable' type="number" placeholder='N/A' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Budget
