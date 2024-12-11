const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();
app.use(cors({
    origin: process.env.FONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const PORT = process.env.PORT || 7203; // Sửa cách gán giá trị PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
        console.log("connect to db");
    }).on('error', (err) => {
        console.error('Error starting server:', err);
    });
}).catch((err) => {
    console.error('Error connecting to database:', err);
});