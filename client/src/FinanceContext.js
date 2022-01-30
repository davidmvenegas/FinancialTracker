import { React, useContext, createContext, useState } from 'react'
export const allFinanceContext = createContext({})
export const useFinanceContext = () => useContext(allFinanceContext)

export const FinanceContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [updateUser, setUpdateUser] = useState()
    const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
    const [updateIncome, setUpdateIncome] = useState()
    const [updateBudget, setUpdateBudget] = useState()
    const [savingData, setSavingData] = useState([])
    const [search, setSearch] = useState("")
    const [updateSavings, setUpdateSavings] = useState()
    const [savingCurrent, setSavingCurrent] = useState(0)
    const [savingTotal, setSavingTotal] = useState(0)
    const [savingName, setSavingName] = useState(0)
    const [showDisplay, setShowDisplay] = useState(false)

    function handleSuccesfulAuth(data) {
        setUser(data)
        setLoggedInStatus("LOGGED_IN")
    }

    function handleSuccesfulLog(data) {
        setUser(data)
        setLoggedInStatus("LOGGED_IN")
        return data
    }

    function handleLogout() {
        setUser({})
        setLoggedInStatus("NOT_LOGGED_IN")
    }

    const handleSearch = (e) => setSearch(e.target.value)
    const filteredItems = savingData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    const allFinanceValues = {
        user,
        setUser,
        updateUser,
        setUpdateUser,
        loggedInStatus,
        setLoggedInStatus,
        handleSuccesfulAuth,
        handleSuccesfulLog,
        handleLogout,
        updateIncome,
        setUpdateIncome,
        updateBudget,
        setUpdateBudget,
        savingData,
        setSavingData,
        search, 
        setSearch,
        handleSearch,
        filteredItems,
        updateSavings,
        setUpdateSavings,
        savingCurrent,
        setSavingCurrent,
        savingTotal,
        setSavingTotal,
        savingName,
        setSavingName,
        showDisplay,
        setShowDisplay,
    }

    return (
        <allFinanceContext.Provider value={allFinanceValues}>{children}</allFinanceContext.Provider>
    )
}