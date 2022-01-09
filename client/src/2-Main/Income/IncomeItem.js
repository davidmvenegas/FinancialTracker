import React from 'react'
import { useFinanceContext } from '../../FinanceContext'
import axios from 'axios'
import Delete from '../../images/red_x_icon.png'

function IncomeItem({data}) {
    const { setUpdateIncome, setUpdateBudget } = useFinanceContext()

    let correctName = data.name
    let correctDate = data.date
    let correctAmount = data.amount
    let correctCategory;
            switch (data.category) {
                case "food":
                    correctCategory = 'Food';
                    break;
                case "housing":
                    correctCategory = 'Housing';
                    break;
                case "transportation":
                    correctCategory = 'Transportation';
                    break;
                case "personal_care":
                    correctCategory = 'Personal Care';
                    break;
                case "education":
                    correctCategory = 'Education';
                    break;
                case "entertainment":
                    correctCategory = 'Entertainment';
                    break;
                case "other":
                    correctCategory = 'Other';
                    break;
                case "":
                    correctCategory = 'Income';
                    break;
                default:
                    correctCategory = "Income"
            }

    async function handleDeleteIncome() {
        await axios.delete(`/income_items/${data.id}`, { withCredentials: true })
        .catch(err => console.error(err))
        await setUpdateIncome(Math.random())
        await setUpdateBudget(Math.random())
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
