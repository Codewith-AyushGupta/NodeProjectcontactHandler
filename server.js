const express = require('express');
const dotEnv= require("dotenv").config();
const app = express();
const port =process.env.PORT || 3000;
const routLocaion = require('./routes/contactRoutes')
const connectToDB = require('./config/dbConnection');

app.use(express.json());
app.use('/contact',routLocaion);
connectToDB();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})