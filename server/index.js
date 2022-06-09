import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/auth.js';
import privateRoute from './routes/private.js'
import connectDB from './config/config.js';
import errorHandler from './middleware/error.js';

const app = express();

dotenv.config({ path: '../config.env' });
const PORT = process.env.PORT || 5000;

//Connect DB
connectDB();


app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/api/auth', router)
app.use('/api/private', privateRoute)

app.use(errorHandler)


const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})

process.on("unhandledRejection", (error, promise) => {
    console.log(`Logged Error: ${error}`);
    server.close(() => process.exit(1));
})