import './budget.css'
import React, { useState, useEffect } from 'react'
import { useFinanceContext } from '../../FinanceContext'
import axios from 'axios'
import { PieChart } from 'react-minimal-pie-chart';

function Budget() {
    const { updateBudget } = useFinanceContext()
    const [food, setFood] = useState(0)
    const [housing, setHousing] = useState(0)
    const [transportation, setTransportation] = useState(0)
    const [personalCare, setPersonalCare] = useState(0)
    const [entertainment, setEntertainment] = useState(0)
    const [other, setOther] = useState(0)
    const [itemsData, setItemsData] = useState([])

    const foodSpent = Math.abs(itemsData.filter((item) => (item.category === 'food')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const housingSpent = Math.abs(itemsData.filter((item) => (item.category === 'housing')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const transportationSpent = Math.abs(itemsData.filter((item) => (item.category === 'transportation')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const personalCareSpent = Math.abs(itemsData.filter((item) => (item.category === 'personal_care')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const entertainmentSpent = Math.abs(itemsData.filter((item) => (item.category === 'entertainment')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const otherSpent = Math.abs(itemsData.filter((item) => (item.category === 'other')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const totalSpent = (foodSpent + housingSpent + transportationSpent + personalCareSpent + entertainmentSpent + otherSpent)

    const foodChange = (e) => setFood(e.target.value)
    const housingChange = (e) => setHousing(e.target.value)
    const transportationChange = (e) => setTransportation(e.target.value)
    const personalCareChange = (e) => setPersonalCare(e.target.value)
    const entertainmentChange = (e) => setEntertainment(e.target.value)
    const otherChange = (e) => setOther(e.target.value)





    // const addFood = () => axios.patch(`/budget_items/1`, {budget_item: {food: food}}, { withCredentials: true })
    // const addHousing = () => axios.patch(`/budget_items/2`, {budget_item: {housing: housing}}, { withCredentials: true })
    // const addTransportation = () => axios.patch(`/budget_items/3`, {budget_item: {transportation: transportation}}, { withCredentials: true })
    // const addPersonalCare = () => axios.patch(`/budget_items/4`, {budget_item: {personal_care: personalCare}}, { withCredentials: true })
    // const addEntertainment = () => axios.patch(`/budget_items/5`, {budget_item: {entertainment: entertainment}}, { withCredentials: true })
    // const addOther = () => axios.patch(`/budget_items/6`, {budget_item: {other: other}}, { withCredentials: true })

    const makeFood = () => axios.post(`/budget_items/1`, {budget_item: {food: food}}, { withCredentials: true })
    const makeHousing = () => axios.post(`/budget_items/2`, {budget_item: {housing: housing}}, { withCredentials: true })
    const makeTransportation = () => axios.post(`/budget_items/3`, {budget_item: {transportation: transportation}}, { withCredentials: true })
    const makePersonalCare = () => axios.post(`/budget_items/4`, {budget_item: {personal_care: personalCare}}, { withCredentials: true })
    const makeEntertainment = () => axios.post(`/budget_items/5`, {budget_item: {entertainment: entertainment}}, { withCredentials: true })
    const makeOther = () => axios.post(`/budget_items/6`, {budget_item: {other: other}}, { withCredentials: true })






    useEffect(() => {
        axios.get(`/income_items`, { withCredentials: true })
        .then(res => setItemsData(res.data))
        .catch(err => console.error(err))
    }, [updateBudget])

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
                            <td>$<input onChange={foodChange} onBlur={makeFood} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                        <tr>
                            <td>Housing</td>
                            <td>${housingSpent}</td>
                            <td>$<input onChange={housingChange} onBlur={makeHousing} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                        <tr>
                            <td>Transportation</td>
                            <td>${transportationSpent}</td>
                            <td>$<input onChange={transportationChange} onBlur={makeTransportation} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                        <tr>
                            <td>Personal Care</td>
                            <td>${personalCareSpent}</td>
                            <td>$<input onChange={personalCareChange} onBlur={makePersonalCare} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                        <tr>
                            <td>Entertainment</td>
                            <td>${entertainmentSpent}</td>
                            <td>$<input onChange={entertainmentChange} onBlur={makeEntertainment} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td>${otherSpent}</td>
                            <td>$<input onChange={otherChange} onBlur={makeOther} className='budget-editable' type="number" placeholder='0' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Budget