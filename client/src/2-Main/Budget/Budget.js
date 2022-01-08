import './budget.css'
import React, { useState, useEffect } from 'react'
import { useFinanceContext } from '../../FinanceContext'
import axios from 'axios'
import { PieChart } from 'react-minimal-pie-chart';

function Budget() {
    const { user, updateBudget } = useFinanceContext()
    const [food, setFood] = useState(0)
    const [housing, setHousing] = useState(0)
    const [transportation, setTransportation] = useState(0)
    const [personalCare, setPersonalCare] = useState(0)
    const [entertainment, setEntertainment] = useState(0)
    const [other, setOther] = useState(0)
    const [itemsData, setItemsData] = useState([])

    const foodChange = (e) => setFood(e.target.value)
    const housingChange = (e) => setHousing(e.target.value)
    const transportationChange = (e) => setTransportation(e.target.value)
    const personalCareChange = (e) => setPersonalCare(e.target.value)
    const entertainmentChange = (e) => setEntertainment(e.target.value)
    const otherChange = (e) => setOther(e.target.value)

    async function addFood() {
        await axios.patch(`/budget_items/${user.user.id}`, {budget_item: {food: food}}, { withCredentials: true })
    }
    async function addHousing() {
        await axios.patch(`/budget_items/${user.user.id}`, {budget_item: {housing: housing}}, { withCredentials: true })
    }
    async function addTransportation() {
        await axios.patch(`/budget_items/${user.user.id}`, {budget_item: {transportation: transportation}}, { withCredentials: true })
    }
    async function addPersonalCare() {
        await axios.patch(`/budget_items/${user.user.id}`, {budget_item: {personal_care: personalCare}}, { withCredentials: true })
    }
    async function addEntertainment() {
        await axios.patch(`/budget_items/${user.user.id}`, {budget_item: {entertainment: entertainment}}, { withCredentials: true })
    }
    async function addOther() {
        await axios.patch(`/budget_items/${user.user.id}`, {budget_item: {other: other}}, { withCredentials: true })
    }

    useEffect(() => {
        axios.get(`/income_items`, { withCredentials: true })
        .then(res => setItemsData(res.data))
        .catch(err => console.error(err))
    }, [updateBudget])

    const foodSpent = Math.abs(itemsData.filter((item) => (item.category === 'food')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const housingSpent = Math.abs(itemsData.filter((item) => (item.category === 'housing')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const transportationSpent = Math.abs(itemsData.filter((item) => (item.category === 'transportation')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const personalCareSpent = Math.abs(itemsData.filter((item) => (item.category === 'personal_care')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const entertainmentSpent = Math.abs(itemsData.filter((item) => (item.category === 'entertainment')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const otherSpent = Math.abs(itemsData.filter((item) => (item.category === 'other')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const totalSpent = (foodSpent + housingSpent + transportationSpent + personalCareSpent + entertainmentSpent + otherSpent)

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
                            <span className='budget-outline-amount'>$0</span>
                        </div>
                        <div className="budget-outline-item">
                            <h4 className="budget-outline-name">Spending:</h4>
                            <span className='budget-outline-amount'>${totalSpent}</span>
                        </div>
                        <div className="budget-outline-separator"></div>
                        <div className="budget-outline-item">
                            <h4 className="budget-outline-name">Left over:</h4>
                            <span className='budget-outline-amount'>$0</span>
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
                            <td>${foodSpent}</td>
                            <td>$<input onChange={foodChange} onBlur={addFood} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                        <tr>
                            <td>Housing</td>
                            <td>${housingSpent}</td>
                            <td>$<input onChange={housingChange} onBlur={addHousing} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                        <tr>
                            <td>Transportation</td>
                            <td>${transportationSpent}</td>
                            <td>$<input onChange={transportationChange} onBlur={addTransportation} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                        <tr>
                            <td>Personal Care</td>
                            <td>${personalCareSpent}</td>
                            <td>$<input onChange={personalCareChange} onBlur={addPersonalCare} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                        <tr>
                            <td>Entertainment</td>
                            <td>${entertainmentSpent}</td>
                            <td>$<input onChange={entertainmentChange} onBlur={addEntertainment} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td>${otherSpent}</td>
                            <td>$<input onChange={otherChange} onBlur={addOther} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Budget