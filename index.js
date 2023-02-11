import express from 'express';
import dotenv from 'dotenv';

// Load env variables
dotenv.config();

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection

// Routes

// Listen on port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
