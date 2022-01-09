import React, { Fragment } from 'react'
import Landing from './Landing'
import { useNavigate } from 'react-router-dom'
import { useFinanceContext } from '../FinanceContext'

function Auth() {
    const navigate = useNavigate()
    const { loggedInStatus } = useFinanceContext()
    return (
        <Fragment>
            {setTimeout(() => {(loggedInStatus === 'LOGGED_IN') ? navigate('/main') : <Landing/>}, 250) }
        </Fragment>
    )
}

export default Auth
