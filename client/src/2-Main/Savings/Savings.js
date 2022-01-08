import './savings.css'
import { React, useEffect, useState } from 'react'
import { useFinanceContext } from '../../FinanceContext'
import axios from 'axios'
import SavingsItem from './SavingsItem'

function Savings() {
    const { user, updateSavings } = useFinanceContext()
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [savingData, setSavingData] = useState([])
    const [search, setSearch] = useState("")

    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleAmountChange = (e) => setAmount(e.target.value)
    const handleDateChange = (e) => setDate(e.target.value)

    function clearForm() {
        setTitle('')
        setAmount(0)
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
    
    const handleSearch = (e) => setSearch(e.target.value)
    const filteredItems = savingData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        axios.get(`/savings_items`, { withCredentials: true })
        .then(res => setSavingData(res.data))
        .catch(err => console.error(err))
    }, [updateSavings])

    return (
        <div className='savings-container'>
            <div className="savings-header">
                <div className="savings-header-box1">
                    <h1 className='main-section-title'>My Saving Goals</h1>
                    <p className='main-section-description'>Save for the Future</p>
                </div>
                <div className="savings-header-box2">
                    <div className="savings-progress-container">
                        <h2 className='savings-category-title'>My Savings Goal: <span>($1,200 of $5,000)</span></h2>
                        <div className="savings-progress-wrapper">
                            <span className="savings-progress" id="savings-progress"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="savings-form-container">
                <form className='income-search-form'>
                    <input onChange={handleSearch} className='income-search-box' type="text" placeholder='Search' />
                </form>
                <form onSubmit={handleAddSaving} className="savings-form">
                    <input onChange={handleTitleChange} value={title} id='first-saving-form' type="text" placeholder='Title...'/>
                    <input onChange={handleAmountChange} value={amount} type="number" placeholder='Amount...' />
                    <input onChange={handleDateChange} value={date} className='input-type-date' id='last-saving-form' type="date"/>
                    <button type="submit">Create Goal</button>
                </form>
            </div>
            <div className="savings-body">
                {filteredItems.map(item => {
                    return <SavingsItem key={item.id} data={item} />
                })}
            </div>
        </div>
    )
}

export default Savings
