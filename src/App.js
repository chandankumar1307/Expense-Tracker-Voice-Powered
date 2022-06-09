import React from 'react'
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import PrivateRoute from './components/Authentication/Routing/PrivateRoute'
import { Routes, Route } from 'react-router-dom'


const App = () => {

    return (
        <div>

            <Routes>
                <Route exact path='/expensetracker' element={<ExpenseTracker />} />
                <Route exact path='/login' element={<ExpenseTracker />} />
                <Route exact path='/register' element={<ExpenseTracker />} />
                <Route exact path='/forgotpassword' element={<ExpenseTracker />} />
                <Route exact path='/passwordreset/:resetToken' element={<ExpenseTracker />} />

            </Routes>


        </div>
    )
}

export default App