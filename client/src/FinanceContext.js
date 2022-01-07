import { React, useContext, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const allFinanceContext = createContext({});
export const useFinanceContext = () => useContext(allFinanceContext)

export const FinanceContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
    const [updateIncome, setUpdateIncome] = useState()


    useEffect(() => {
        axios.get('/logged_in', { withCredentials: true })
        .then(res => {
            if (res.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
                setUser(res.data)
                setLoggedInStatus("LOGGED_IN")
            } else if (!res.data.logged_in && loggedInStatus === "LOGGED_IN") {
                setUser({})
                setLoggedInStatus("NOT_LOGGED_IN")
            }
        })
        .catch(err => console.error(err))
    }, [loggedInStatus])

    function handleSuccesfulAuth(data) {
        setUser(data)
        setLoggedInStatus("LOGGED_IN")
        navigate('/main')
    }

    function handleLogout() {
        setUser({})
        setLoggedInStatus("NOT_LOGGED_IN")
    }

    const allFinanceValues = {
        user,
        loggedInStatus,
        handleSuccesfulAuth, 
        handleLogout,
        updateIncome,
        setUpdateIncome,
    }

    return (
        <allFinanceContext.Provider value={allFinanceValues}>{children}</allFinanceContext.Provider>
    )
}