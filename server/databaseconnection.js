const mongoose = require('mongoose');
require('dotenv').config();

const databaseConnection =  () => {
    mongoose.connect(process.env.ATLAS_DATABASE_URL)
        .then(()=>{
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.log("Database connection failed", err.message);
        })
};
 module.exports = databaseConnection;