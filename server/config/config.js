import dotenv from 'dotenv';

import mongoose from 'mongoose';

const connectDB = async () => {

    dotenv.config({ path: '../../config.env' })

    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
}

export default connectDB;