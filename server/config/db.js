const mongoose = require('mongoose');
require("dotenv").config();


const connectDb = async () => {
    await mongoose.connect(process.env.DB_URL)
    console.log("Connect to database ");

}
module.exports = connectDb