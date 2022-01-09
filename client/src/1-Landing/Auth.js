import React, { Fragment, useEffect } from 'react'
import { useFinanceContext } from '../FinanceContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Auth() {
    const { loggedInStatus, updateUser, setUser, setLoggedInStatus } = useFinanceContext()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/logged_in', { withCredentials: true })
        .then(res => {
            if (res.data.logged_in) {
                setUser(res.data)
                setLoggedInStatus("LOGGED_IN")
                navigate('/main')
            } else if (!res.data.logged_in) {
                setUser({})
                setLoggedInStatus("NOT_LOGGED_IN")
                navigate('/landing')
            }
        })
        .catch(err => console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedInStatus, setLoggedInStatus, setUser, updateUser])

    return (
        <Fragment></Fragment>
    )
}

export default Auth