import React from 'react'
import { useFinanceContext } from '../../FinanceContext'
import axios from 'axios'
import Delete from '../../images/red_x_icon.png'

function IncomeItem({data}) {
    const { setUpdateIncome } = useFinanceContext()

    let correctName = data.name
    let correctDate = data.date
    let correctAmount = data.amount
    let correctCategory = data.category === "" ? "Income" : data.category

    async function handleDeleteIncome() {
        await axios.delete(`/income_items/${data.id}`, { withCredentials: true })
        .catch(err => console.error(err))
        await setUpdateIncome(Math.random())
    }

    return (
        <tr>
            <td>{correctName}</td>
            <td>{correctDate}</td>
            <td style={correctAmount < 0 ? {color: "red"} : {color: "green"}}>{correctAmount}</td>
            <td>{correctCategory}</td>
            <td onClick={handleDeleteIncome} style={{width: '2.5%'}}><img id='delete-income-item' src={Delete} alt='Delete'/></td>
        </tr>
    )
}

export default IncomeItem
