const { Sequelize } = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize('av-youtune', 'root', '', {
//     host: "localhost",
//     logging: true,
//     dialect: 'mysql'
// });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    // logging: true,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });


// sequelize.sync({ alter: true })
//     .then(() => {
//         console.log('All models were synchronized successfully.');
//     })
//     .catch((error) => {
//         console.error('Error synchronizing models:', error);
//     });

module.exports = sequelize;