import User from '../models/User.js';
import mongoose from 'mongoose';
import ErrorResponse from '../utils/errorResponse.js';
import sendEmail from '../utils/sendEmail.js';
import crypto from 'crypto';
import Expense from '../models/Expense.js';


export const saveExpense = async (req, res) => {
    const expneseData = req.body;
    const Expenses = new Expense(expneseData)

    try {
        await Expenses.save();
        res.status(201).json(Expenses)

    } catch (error) {

    }
}

export const getExpense = async (req, res) => {
    try {
        const allExpense = await Expense.find();
        res.status(200).json(allExpense)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const register = async (req, res, next) => {
    // res.send("Register Route");
    const { username, email, password } = req.body;

    try {
        const user = await User.create({
            username, email, password
        });

        sendToken(user, 201, res);
    } catch (error) {
        next(error);
    }
}
export const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorResponse("Please provide an email and password ", 400))
    }

    try {
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return next(new ErrorResponse("Invalid Credentials", 401))
        }

        const isMatch = await user.mathPasswords(password);

        if (!isMatch) {
            return next(new ErrorResponse("Invalid Credentials", 401))
        }

        sendToken(user, 200, res);

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}
export const forgotpassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return next(new ErrorResponse("Email could not be send", 404));

        }
        const resetToken = user.getResetPasswordToken();
        await user.save();
        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`
        const message = `
        <h1>You have reqested a password reset</h1>
        <p>Please go to this link to reset your password</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `
        try {
            await sendEmail({
                to: user.email,
                subject: "Password Reset Request",
                text: message
            });
            res.status(200).json({ success: true, data: "Email Send" })
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();
            return next(new ErrorResponse("Email could not be send", 500))
        }
    } catch (error) {
        next(error)
    }
}
export const resetpassword = async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex")

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        });

        if (!user) {
            return next(new ErrorResponse("Invalid Reset Token", 400))
        }
        user.password = req.body.password;
        user.resetPasswordExpire = undefined
        user.resetPasswordToken = undefined

        await user.save();

        res.status(201).json({
            success: true,
            data: "Password Reset Success"
        })
    } catch (error) {
        next(error)
    }
}



const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()
    res.status(statusCode).json({ success: true, user, token })
}