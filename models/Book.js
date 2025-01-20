const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter name of book"]
    },

    type: {
        type: String,
        required: [true, "please enter the type of book"]
    },

    countInStock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

// console.log(typeof (contactSchema))
// console.log((mongoose.model("Contact", contactSchema)))
module.exports = mongoose.model("Book", bookSchema)
