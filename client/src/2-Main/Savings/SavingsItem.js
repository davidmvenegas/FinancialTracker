import React, { useState } from 'react'
import { useFinanceContext } from '../../FinanceContext'
import axios from 'axios'

function SavingsItem({data}) {
    const { setUpdateSavings, setShowDisplay, setSavingCurrent, setSavingTotal, setSavingName } = useFinanceContext()
    const [amountToAdd, setAmountToAdd] = useState('')

    const targetAmount = data.target_amount
    const currentAmount = data.current_amount
    const percentage = (((100 * currentAmount) / targetAmount) < 99 ? ((100 * currentAmount) / targetAmount) : 100)

    async function handleDeleteIncome() {
        await axios.delete(`/savings_items/${data.id}`, { withCredentials: true })
        .catch(err => console.error(err))
        await setUpdateSavings(Math.random())
    }

    const handleChange = (e) => setAmountToAdd(e.target.value)

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.patch(`/savings_items/${data.id}`, {savings_item: {current_amount: amountToAdd}}, { withCredentials: true })
        .catch(err => console.error(err))
        await setUpdateSavings(Math.random())
        setAmountToAdd('')
    }

    function handleClick() {
        setShowDisplay(true)
        setSavingCurrent(currentAmount)
        setSavingTotal(targetAmount)
        setSavingName(data.name)
    }

    function handleBlur() {
        setShowDisplay(false)
    }

    return (
        <div tabIndex="1" onClick={handleClick} onBlur={handleBlur} className="savings-card" >
            <div className="savings-card-wrapper">
                <h1 className="savings-card-title">{data.name}</h1>
                <form tabIndex="1" onSubmit={handleSubmit} className="add-to-savings-form">
                    <input onChange={handleChange} value={amountToAdd} type="number" placeholder='$' required/>
                    <button type="submit">Add</button>
                </form>
                <div className="savings-card-date-box">
                    <h2>Target Date:</h2>
                    <h4>{data.target_date}</h4>
                </div>
                <div className="savings-card-percent-box">
                    <h2>Completion:</h2>
                    <h4 style={percentage > 99 ? {color: "limegreen", fontWeight: 500} : {color: 'inherit'}}>{parseInt(percentage)}%</h4> 
                </div>
                <div onClick={handleDeleteIncome} className="delete-savings-item">X</div>
            </div>
        </div>
    )
}

export const SavingItemDisplay = () => {
    const { showDisplay, savingCurrent, savingTotal, savingName } = useFinanceContext()
    const percentage = (((100 * savingCurrent) / savingTotal) < 99 ? ((100 * savingCurrent) / savingTotal) : 100)
    return (
        showDisplay ?
        (<div style={showDisplay ? {opacity: '100'} : {opacity: '0'}} className="savings-header-box2">
            <div className="savings-progress-container">
                <h2 className='savings-category-title'><span>{savingName}:</span> (<span>${savingCurrent}</span> of <span>${savingTotal}</span>)</h2>
                <div className="savings-progress-wrapper">
                    <span style={showDisplay ? {width: `${percentage}%`} : {width: `0%`}} className="savings-progress" id="savings-progress"></span>
                </div>
            </div>
        </div>) : (<h1>Hello world</h1>)
    )
}

export default SavingsItem
