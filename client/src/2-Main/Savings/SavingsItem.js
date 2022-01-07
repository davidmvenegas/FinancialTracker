import React, { useState } from 'react'
import { useFinanceContext } from '../../FinanceContext'
import axios from 'axios'

function SavingsItem({data}) {
    const { setUpdateSavings } = useFinanceContext()
    const [amountToAdd, setAmountToAdd] = useState('')

    const targetAmount = data.target_amount
    const currentAmount = data.current_amount
    const percentage = (100 * currentAmount) / targetAmount

    async function handleDeleteIncome() {
        await axios.delete(`/savings_items/${data.id}`, { withCredentials: true })
        .catch(err => console.error(err))
        await setUpdateSavings(Math.random())
    }

    const handleChange = (e) => setAmountToAdd(e.target.value)

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.patch(`/savings_items/${data.id}`, {
            savings_item: {
                current_amount: amountToAdd,
            }
        }, { withCredentials: true })
        .catch(err => console.error(err))
        await setUpdateSavings(Math.random())
        setAmountToAdd('')
    }

    return (
        <div tabIndex="0" className="savings-card">
            <div className="savings-card-wrapper">
                <h1 className="savings-card-title">{data.name}</h1>
                <form onSubmit={handleSubmit} className="add-to-savings-form">
                    <input onChange={handleChange} value={amountToAdd} type="number" placeholder='$' required/>
                    <button type="submit">Add</button>
                </form>
                <div className="savings-card-date-box">
                    <h2>Target Date:</h2>
                    <h4>{data.target_date}</h4>
                </div>
                <div className="savings-card-percent-box">
                    <h2>Completion:</h2>
                    <h4>{percentage}%</h4> 
                </div>
                <div onClick={handleDeleteIncome} className="delete-savings-item">X</div>
            </div>
        </div>
    )
}

export default SavingsItem
