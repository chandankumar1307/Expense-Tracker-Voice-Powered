import User from '../models/User.js';
import ErrorResponse from '../utils/errorResponse.js';

export const register = async (req, res, next) => {
    // res.send("Register Route");
    const { username, email, password } = req.body;

    try {
        const user = await User.create({
            username, email, password
        });

        res.status(201).json({ success: true, user })
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

        res.status(200).json({ success: true, token: "jhg6jhgjh" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}
export const forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route")
}
export const resetpassword = (req, res, next) => {
    res.send("Reset Password")
}