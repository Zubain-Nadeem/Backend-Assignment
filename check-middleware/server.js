require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./router/userroute')
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

connectDB();

app.use(userRouter);


app.listen(PORT , () => console.log(`server is running on PORT ${PORT}`))