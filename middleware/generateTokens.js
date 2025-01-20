const jwt = require("jsonwebtoken")
require('dotenv').config()

const createToken = (id) => {
    let token = jwt.sign({ id }, process.env.JWT_SECRET)
    return token
}
module.exports = createToken