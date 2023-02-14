import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.set('strictQuery', false);
const mongoConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {}, (err) => {
        try {
            console.log('Connected to database');
        } catch (error) {
            console.log(error);
        }
    });
};

export default mongoConnection;
