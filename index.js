import express from 'express';
import dotenv from 'dotenv';
import mongoConnection from './config/db.js';
import frontendRoute from './routes/frontendRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoConnection();

app.use('/api', frontendRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
