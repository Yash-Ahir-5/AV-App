const express = require('express');
const sequelize = require('./src/config');
const cors = require('cors');
require('dotenv').config();
require('./models/AudioModel');
require('./models/UserModel'); // Ensure UserModel is required
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
}));
app.use(express.json());
app.use("/", require("./routes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is started on Port ${PORT}.`);
});
