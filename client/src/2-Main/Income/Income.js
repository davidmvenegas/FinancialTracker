import './income.css'
import { React, useEffect, useState } from 'react'
import { useFinanceContext } from '../../FinanceContext'
import axios from 'axios'
import IncomeItem from './IncomeItem'

function Income() {
    const { user, updateIncome, setUpdateBudget, setUpdateUser } = useFinanceContext()
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState("")
    const [type, setType] = useState("")
    const [incomeItemData, setIncomeItemData] = useState([])
    const [search, setSearch] = useState("")

    let today = new Date()
    let mm = today.getMonth()+1
    let dd = today.getDate()
    let yyyy = today.getFullYear()
    let todaysDate = (`${mm}/${dd}/${yyyy}`)

    const typeEl = document.getElementById('typeID')
    const descriptionEl = document.getElementById('descriptionID')
    const categoryEl = document.getElementById('categoryID')

    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handleAmountChange = (e) => setAmount((type === 'income') ? Math.abs(e.target.value) : -Math.abs(e.target.value))
    const handleCategoryChange = (e) => setCategory(e.target.value)
    const handleTypeChange = (e) => {
        setDescription('')
        setAmount('')
        setCategory('')
        setType(e.target.value)
        descriptionEl.disabled = false
    }

    function clearForm() {
        setDescription('')
        setAmount('')
        setCategory('')
        typeEl.selectedIndex = 0
        categoryEl.selectedIndex = 0
        descriptionEl.disabled = true
    }

    async function handleAddIncomeItem(e) {
        e.preventDefault()
        clearForm()
        await axios.post('/income_items', {
            income_item: {
                user_id: user.user.id,
                name: description,
                amount: amount,
                category: category,
                date: todaysDate,
            }
        }, { withCredentials: true })
        .catch(err => console.error(err))
        const response = await axios.get(`/income_items`, { withCredentials: true })
        setIncomeItemData(response.data)
        setUpdateBudget(Math.random())
        setUpdateUser(Math.random())
    }

    const handleSearch = (e) => setSearch(e.target.value)
    const filteredItems = incomeItemData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    const totalIncome = Math.abs(incomeItemData.filter((item) => (item.category === '')).map(i => i.amount).reduce((a, b) => a + b, 0))
    const totalExpenses = Math.abs(incomeItemData.filter((item) => (item.category !== '')).map(i => i.amount).reduce((a, b) => a + b, 0))

    useEffect(() => {
        axios.get(`/income_items`, { withCredentials: true })
        .then(res => setIncomeItemData(res.data))
        .catch(err => console.error(err))
    }, [updateIncome])

    return (
        <div className='income-container'>
            <div className="income-header">
                <div className="income-header-box1">
                    <h1 className='main-section-title'>Personal Ledger</h1>
                    <p className='main-section-description'>Organize Your Finances</p>
                </div>
                <div className="income-header-box2">
                    <h2 className='income-category-title'>Income</h2>
                    <div className="income-category-amount"><h2><span>$</span> {totalIncome}</h2></div>
                </div>
                <div className="income-header-box3">
                    <h2 className='income-category-title'>Expenses</h2>
                    <div className="income-category-amount"><h2><span>$</span> {totalExpenses}</h2></div>
                </div>
                <div className="income-header-box4">
                    <h2 className='income-category-title'>Total Balance</h2>
                    <div className="income-category-amount"><h2><span>$</span> {(totalIncome - totalExpenses)}</h2></div>
                </div>
            </div>
            <div className="income-form-container">
                <div className="income-box">
                    <form className='income-search-form'>
                        <input onChange={handleSearch} className='income-search-box' type="text" placeholder='Search' />
                    </form>
                    <form onSubmit={handleAddIncomeItem} className="income-form">
                        <select id='typeID' onChange={handleTypeChange} className='income-form-header income-form-select' required >
                            <option disabled selected hidden>Type...</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                        <input id='descriptionID' onChange={handleDescriptionChange} className='income-form-header' value={description} type="text" placeholder='Description...' disabled={type === ''} required />
                        <input id='amountID' onChange={handleAmountChange} className='income-form-header' value={amount} type="number" placeholder='Amount...' disabled={description === ''} required />
                        <select id='categoryID' onChange={handleCategoryChange} className="income-form-header income-form-select" disabled={(type === 'income') || (amount === '')} required >
                            <option value="" disabled selected hidden >Category...</option>
                            <option value="food">Food</option>
                            <option value="housing">Housing</option>
                            <option value="transportation">Transportation</option>
                            <option value="personal_care">Personal Care</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="other">Other</option>
                        </select>
                        <button className='income-submit-button' type="submit" style={type === "" ? {pointerEvents: "none"} : {pointerEvents: "all"}}>ADD</button>
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
                        </tr>
                    </thead>
                    <tbody className='income-table-body'>
                        {filteredItems.map(data => {
                            return <IncomeItem key={data.id} data={data} /> 
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Income
