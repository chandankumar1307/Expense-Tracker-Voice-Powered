import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: String,
    type: String,
    date: String
})

const Expense = mongoose.model('Expense', ExpenseSchema);
export default Expense