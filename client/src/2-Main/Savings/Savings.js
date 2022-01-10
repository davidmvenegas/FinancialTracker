import './savings.css'
import { React, useState, useEffect } from 'react'
import { useFinanceContext } from '../../FinanceContext'
import axios from 'axios'
import SavingsItem from './SavingsItem'
import { SavingItemDisplay } from './SavingsItem'

function Savings() {
    const { user, setSavingData, handleSearch, filteredItems, updateSavings } = useFinanceContext()
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")

    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleAmountChange = (e) => setAmount(e.target.value)
    const handleDateChange = (e) => setDate(e.target.value)

    function clearForm() {
        setTitle('')
        setAmount('')
        setDate('')
    }

    async function handleAddSaving(e) {
        e.preventDefault()
        clearForm()
        await axios.post('/savings_items', {
            savings_item: {
                user_id: user.user.id,
                name: title,
                target_amount: amount,
                current_amount: 0,
                target_date: date,
            }
        }, { withCredentials: true })
        .catch(err => console.error(err))
        const response = await axios.get(`/savings_items`, { withCredentials: true })
        setSavingData(response.data)
    }

    useEffect(() => {
        axios.get(`/savings_items`, { withCredentials: true })
        .then(res => setSavingData(res.data))
        .catch(err => console.error(err))
    }, [setSavingData, updateSavings])

    return (
        <div className='savings-container'>
            <div className="savings-header">
                <div className="savings-header-box1">
                    <h1 className='main-section-title'>My Saving Goals</h1>
                    <p className='main-section-description'>Save for the Future</p>
                </div>
                <SavingItemDisplay />
            </div>
            <div className="savings-form-container">
                <form className='income-search-form'>
                    <input onChange={handleSearch} className='savings-search-box' type="text" placeholder='Search' />
                </form>
                <form onSubmit={handleAddSaving} className="savings-form">
                    <input onChange={handleTitleChange} value={title} id='first-saving-form' type="text" placeholder='Title...' maxLength="20" required />
                    <input onChange={handleAmountChange} value={amount} type="number" placeholder='Amount...' required />
                    <input onChange={handleDateChange} value={date} className='input-type-date' id='last-saving-form' type="date" required />
                    <button type="submit">Create Goal</button>
                </form>
            </div>
            <div className="savings-body">
                {filteredItems.map(item => {
                    return <SavingsItem key={item.id} data={item} />
                })}
                {(filteredItems.length === 0) && <p id='savingsPlaceholder'>Add a goal to begin tracking its progress</p>}
            </div>
        </div>
    )
}

export default Savings
