const mongoose = require("mongoose")
const orderSchema = mongoose.Schema({


    book_name: {
        type: String,
        required: [true, "please enter the book you need"]
    },
    amount: {
        type: Number,
        required: [true, "please enter how many books you need"]
    },

    totalPrice: {
        type: Number,
        required: [true, "please enter price"]
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    user_email: {
        type: String,
        required: true,
        ref: "User"
    },

})

module.exports = mongoose.model("Order", orderSchema)






