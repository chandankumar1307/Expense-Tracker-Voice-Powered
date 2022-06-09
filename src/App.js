import React from 'react'
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';

import { Routes, Route } from 'react-router-dom'


const App = () => {

    return (
        <div>

            <Routes>
                <Route exact path='/' element={<ExpenseTracker />} />

            </Routes>


        </div>
    )
}

export default App