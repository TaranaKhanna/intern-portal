import express from 'express';
import cors from 'cors';
import connectDB from './database/db.js';
import dotenv from 'dotenv';
import internRoutes from './routes/intern.routes.js'

dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use('/api/intern', internRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
})