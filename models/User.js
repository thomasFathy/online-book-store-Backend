const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    email: {
        type: String,
        required: [true, "please enter your email"],
        unique: [true, "Email address already taken"]
    },

    password: {
        type: String,
        required: [true, "please add the password"],
        unique: [true, "this password is not valid for you"]
    }

}, {
    timestamps: true
})
module.exports = mongoose.model("User", userSchema)