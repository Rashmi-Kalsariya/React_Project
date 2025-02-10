const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();


const GenerateToken = async (data) => {
    try {
        let token = await jwt.sign(data, process.env.private_key);
        return token;
    } catch (error) {
        throw new Error("Could not sign token: " + error);
    }
};

const HashPassword = async (password) => {
    let hash = await bcrypt.hash(password, 10);
    return hash;
};

const Compare = async (hash, password) => {
    return await bcrypt.compare(password, hash);
};

module.exports = { GenerateToken, Compare, HashPassword };