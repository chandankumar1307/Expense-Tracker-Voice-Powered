import React from 'react'
import axios from 'axios';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';

import { Routes, Route } from "react-router-dom";
import Auth from './components/Authentication/Auth';



const App = () => {

    const getExpense = async () => {
        let expense = await axios.get('http://localhost:5000/api/auth/getExpense')
        // console.log(expense.data);
        const allExpense = expense.data;
        // console.log(allExpense);
        const namedExpense = allExpense.filter((expense) => expense.name === 'Chandan')
        // console.log(namedExpense);
    }
    const name = localStorage.getItem('username')
    console.log(name);
    getExpense();
    // const allExpense = getExpense();
    // console.log(allExpense);

    return (
        <div>
            {/* <ExpenseTracker /> */}
            <Routes>
                <Route exact path='/' element={<ExpenseTracker />} />
                <Route exact path='/login' element={<Auth />} />
            </Routes>

        </div>
    )
}

export default App