const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
require("dotenv").config()




function splitTokens(token) {
    let splittedToken = token.split(" ")[1]
    return splittedToken
}



const validateToken = asyncHandler(async (request, response, next) => {
    let token;
    let authHeader = request.headers.authorization || request.headers.Authorization
    // check if authHeader valid 
    if (authHeader && authHeader.startsWith("Bearer")) {
        try {

            token = splitTokens(authHeader)
            const decoded = await jwt.verify(token, "sw2")
            // console.log(decoded)
            request.user = await User.findById(decoded.id)
            // console.log(request.user)
            next()
        } catch (error) {
            response.status(404).send("User not authorized")
        }
    }
    if (!token) {
        response.status(401).send("User is not authorized or token is missing");
    }
})

module.exports = validateToken



// const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");

// const validateToken = asyncHandler(async (request, response, next) => {
//     let token;
//     let authHeader = request.headers.Authorization || request.headers.authorization;
//     if (authHeader && authHeader.startsWith("Bearer")) {
//         token = authHeader.split(" ")[1];
//         jwt.verify(token, "abosalma", (err, decoded) => {
//             if (err) {
//                 response.status(401);
//                 throw new Error("User is not authorized");
//             }
//             request.user = decoded.user;
//             next();
//         });

//         if (!token) {
//             response.status(401);
//             throw new Error("User is not authorized or token is missing");
//         }
//     }
// });

// module.exports = validateToken;