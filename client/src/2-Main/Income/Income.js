import './income.css'
import React from 'react'
import Delete from '../../images/red_x_icon.png'

function Income() {
    return (
        <div className='income-container'>
            <div className="income-header">
                <div className="income-header-box1">
                    <h1 className='main-section-title'>Personal Ledger</h1>
                    <p className='main-section-description'>Organize Your Finances</p>
                </div>
                <div className="income-header-box2">
                    <h2 className='income-category-title'>Income</h2>
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
                <div className="income-box">
                    <form className='income-search-form'>
                        <input className='income-search-box' type="text" placeholder='Search' />
                    </form>
                    <form className="income-form">
                        <input id='first-income-form' className='income-form-header' type="text" placeholder='Description...' />
                        <input className='income-form-header' type="number" placeholder='Amount...' />
                        <select className='income-form-header income-form-select'>
                            <option disabled selected hidden>Type...</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                        <select id='last-income-form' className="income-form-header income-form-select">
                            <option disabled selected hidden>Category...</option>
                            <option value="food">Food</option>
                            <option value="housing">Housing</option>
                            <option value="transportation">Transportation</option>
                            <option value="personal_care">Personal Care</option>
                            <option value="education">Education</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="other">Other</option>
                        </select>
                        <button className='income-submit-button' type="submit">ADD</button>
                    </form>
                </div>
            </div>
            <div className="income-body">
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th style={{width: '2.5%'}}></th>
                            <th style={{width: '2.5%'}}></th>
                        </tr>
                    </thead>
                    <tbody className='income-table-body'>
                        <tr>
                            <td>Burger King</td>
                            <td>01/04/2022</td>
                            <td>$40</td>
                            <td>Food</td>
                            <td style={{width: '2.5%'}}><img id='delete-income-item' src={Delete} alt='Delete'/></td>
                        </tr>
                        <tr>
                            <td>Burger King</td>
                            <td>01/04/2022</td>
                            <td>$40</td>
                            <td>Food</td>
                            <td style={{width: '2.5%'}}><img id='delete-income-item' src={Delete} alt='Delete'/></td>
                        </tr>
                        <tr>
                            <td>Burger King</td>
                            <td>01/04/2022</td>
                            <td>$40</td>
                            <td>Food</td>
                            <td style={{width: '2.5%'}}><img id='delete-income-item' src={Delete} alt='Delete'/></td>
                        </tr>
                        <tr>
                            <td>Burger King</td>
                            <td>01/04/2022</td>
                            <td>$40</td>
                            <td>Food</td>
                            <td style={{width: '2.5%'}}><img id='delete-income-item' src={Delete} alt='Delete'/></td>
                        </tr>
                        <tr>
                            <td>Burger King</td>
                            <td>01/04/2022</td>
                            <td>$40</td>
                            <td>Food</td>
                            <td style={{width: '2.5%'}}><img id='delete-income-item' src={Delete} alt='Delete'/></td>
                        </tr>
                        <tr>
                            <td>Burger King</td>
                            <td>01/04/2022</td>
                            <td>$40</td>
                            <td>Food</td>
                            <td style={{width: '2.5%'}}><img id='delete-income-item' src={Delete} alt='Delete'/></td>
                        </tr>
                        <tr>
                            <td>Burger King</td>
                            <td>01/04/2022</td>
                            <td>$40</td>
                            <td>Food</td>
                            <td style={{width: '2.5%'}}><img id='delete-income-item' src={Delete} alt='Delete'/></td>
                        </tr>
                        <tr>
                            <td>Burger King</td>
                            <td>01/04/2022</td>
                            <td>$40</td>
                            <td>Food</td>
                            <td style={{width: '2.5%'}}><img id='delete-income-item' src={Delete} alt='Delete'/></td>
                        </tr>
                        <tr>
                            <td>Burger King</td>
                            <td>01/04/2022</td>
                            <td>$40</td>
                            <td>Food</td>
                            <td style={{width: '2.5%'}}><img id='delete-income-item' src={Delete} alt='Delete'/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Income
