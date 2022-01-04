import { React, useContext, createContext } from 'react'

export const useFinanceContext = () => {
    return useContext(allFinanceContext);
};
export const allFinanceContext = createContext({});

export const FinanceContextProvider = ({ children }) => {

    const allFinanceValues = {
        
    }

    return (
        <allFinanceContext.Provider value={allFinanceValues}>{children}</allFinanceContext.Provider>
    )
}