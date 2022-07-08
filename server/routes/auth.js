import express from 'express';
import { register, login, forgotpassword, resetpassword, saveExpense, getExpense } from '../controllers/auth.js';

const router = express.Router();
router.post('/saveExpense', saveExpense)
router.get('/getExpense', getExpense)
router.post('/register', register);
router.post('/login', login);
router.post('/forgotpassword', forgotpassword);
router.put('/resetpassword/:resetToken', resetpassword);

export default router;