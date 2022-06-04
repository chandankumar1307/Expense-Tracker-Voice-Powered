import React, { useReducer, createContext } from "react";
import contextReducer from './contextReducer'

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState,)

    const deleteTransaction = (id) => {
        dispatch({ type: 'Delete_Transaction', payload: id })
    }
    const addTransaction = (transaction) => {
        dispatch({ type: 'Add_TRANSACTION', payload: transaction })
    }

    return (
        <ExpenseTrackerContext.Provider value={{ appName: 'Expense Tracker' }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}