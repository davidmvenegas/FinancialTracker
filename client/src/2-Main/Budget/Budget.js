import './budget.css'
import React, { useState, useEffect } from 'react'
import { useFinanceContext } from '../../FinanceContext'
import axios from 'axios'
import { PieChart } from 'react-minimal-pie-chart';

function Budget() {
    const { user, updateBudget } = useFinanceContext()
    const [food, setFood] = useState('')
    const [housing, setHousing] = useState('')
    const [transportation, setTransportation] = useState('')
    const [personalCare, setPersonalCare] = useState('')
    const [entertainment, setEntertainment] = useState('')
    const [other, setOther] = useState('')
    const [itemsData, setItemsData] = useState([])
    const [update, setUpdate] = useState()

    const [findFood, setFindFood] = useState(0)
    const [findHousing, setFindHousing] = useState(0)
    const [findTransportation, setFindTransportation] = useState(0)
    const [findPersonalCare, setFindPersonalCare] = useState(0)
    const [findEntertainment, setFindEntertainment] = useState(0)
    const [findOther, setFindOther] = useState(0)

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


    async function editFood() {
        if (food !== '') {
            await axios.post(`/foods`, {food: {user_id: user.user.id, amount: food}}, { withCredentials: true })
            setUpdate(Math.random())
        }
    }
    async function editHousing() {
        if (housing !== '') {
            await axios.post(`/housings`, {housing: {user_id: user.user.id, amount: housing}}, { withCredentials: true })
            setUpdate(Math.random())
        }
    }
    async function editTransportation() {
        if (transportation !== '') {
            await axios.post(`/transportations`, {transportation: {user_id: user.user.id, amount: transportation}}, { withCredentials: true })
            setUpdate(Math.random())
        }
    }
    async function editPersonalCare() {
        if (personalCare !== '') {
            await axios.post(`/personal_cares`, {personal_care: {user_id: user.user.id, amount: personalCare}}, { withCredentials: true })
            setUpdate(Math.random())
        }
    }
    async function editEntertainment() {
        if (entertainment !== '') {
            await axios.post(`/entertainments`, {entertainment: {user_id: user.user.id, amount: entertainment}}, { withCredentials: true })
            setUpdate(Math.random())
        }
    }
    async function editOther() {
        if (other !== '') {
            await axios.post(`/others`, {other: {user_id: user.user.id, amount: other}}, { withCredentials: true })
            setUpdate(Math.random())
        }
    }

    const totalBudget = ((isNaN(findFood?.amount) ? 0 : findFood?.amount) + (isNaN(findHousing?.amount) ? 0 : findHousing?.amount) + (isNaN(findTransportation?.amount) ? 0 : findTransportation?.amount) + (isNaN(findPersonalCare?.amount) ? 0 : findPersonalCare?.amount) + (isNaN(findEntertainment?.amount) ? 0 : findEntertainment?.amount) + (isNaN(findOther?.amount) ? 0 : findOther?.amount))

    useEffect(() => {
        axios.get(`/income_items`, { withCredentials: true })
        .then(res => setItemsData(res.data))
        axios.get(`/foods`, { withCredentials: true })
        .then(res => setFindFood(res.data))
        axios.get(`/housings`, { withCredentials: true })
        .then(res => setFindHousing(res.data))
        axios.get(`/transportations`, { withCredentials: true })
        .then(res => setFindTransportation(res.data))
        axios.get(`/personal_cares`, { withCredentials: true })
        .then(res => setFindPersonalCare(res.data))
        axios.get(`/entertainments`, { withCredentials: true })
        .then(res => setFindEntertainment(res.data))
        axios.get(`/others`, { withCredentials: true })
        .then(res => setFindOther(res.data))
        .catch(err => console.error(err))
    }, [updateBudget, update])

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
                            <span className='budget-outline-amount'>${(isNaN(totalBudget) ? 0 : totalBudget)}</span>
                        </div>
                        <div className="budget-outline-item">
                            <h4 className="budget-outline-name">Spending:</h4>
                            <span className='budget-outline-amount'>${(isNaN(totalSpent) ? 0 : totalSpent)}</span>
                        </div>
                        <div className="budget-outline-separator"></div>
                        <div className="budget-outline-item">
                            <h4 className="budget-outline-name">Left over:</h4>
                            <span className='budget-outline-amount'>${(isNaN(totalBudget - totalSpent)) ? 0 : (totalBudget - totalSpent)}</span>
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
                            <td style={foodSpent > findFood?.amount ? {color: "red"} : {color: "black"}} >${foodSpent}</td>
                            <td>$<input onInput={foodChange} onBlur={editFood} className='budget-editable' type="number" placeholder={findFood?.amount} /></td>
                        </tr>
                        <tr>
                            <td>Housing</td>
                            <td style={housingSpent > findHousing?.amount ? {color: "red"} : {color: "black"}} >${housingSpent}</td>
                            <td>$<input onInput={housingChange} onBlur={editHousing} className='budget-editable' type="number" placeholder={findHousing?.amount} /></td>
                        </tr>
                        <tr>
                            <td>Transportation</td>
                            <td style={transportationSpent > findTransportation?.amount ? {color: "red"} : {color: "black"}} >${transportationSpent}</td>
                            <td>$<input onInput={transportationChange} onBlur={editTransportation} className='budget-editable' type="number" placeholder={findTransportation?.amount} /></td>
                        </tr>
                        <tr>
                            <td>Personal Care</td>
                            <td style={personalCareSpent > findPersonalCare?.amount ? {color: "red"} : {color: "black"}} >${personalCareSpent}</td>
                            <td>$<input onInput={personalCareChange} onBlur={editPersonalCare} className='budget-editable' type="number" placeholder={findPersonalCare?.amount} /></td>
                        </tr>
                        <tr>
                            <td>Entertainment</td>
                            <td style={entertainmentSpent > findEntertainment?.amount ? {color: "red"} : {color: "black"}} >${entertainmentSpent}</td>
                            <td>$<input onInput={entertainmentChange} onBlur={editEntertainment} className='budget-editable' type="number" placeholder={findEntertainment?.amount} /></td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td style={otherSpent > findOther?.amount ? {color: "red"} : {color: "black"}} >${otherSpent}</td>
                            <td>$<input onInput={otherChange} onBlur={editOther} className='budget-editable' type="number" placeholder={findOther?.amount} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Budget