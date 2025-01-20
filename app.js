const express = require('express')
const connectDb = require('./config/dbConnection')
const app = express()
require("dotenv").config

const Book = require("./models/Book")
app.use(express.json());
connectDb()

app.use("/books", require("./routes/booksRoutes"))
app.use("/users", require("./routes/usersRoutes"))
app.use("/admins", require("./routes/adminsRoutes"))
app.use("/orde rs", require("./routes/ordersRoutes"))
app.listen(5000)



// const book = await Book.findOne({ name: req.body.book_name })

// const bookPrice = async (nameOfBook) => {
//     // const book = await Book.findOne({ name: "life of hitler" }).select("price")
//     const price = await Book.findOne({ name: nameOfBook }).select("price")
//     const entries1 = Object.entries(price)
//     const entries2 = Object.entries(entries1[2][1])
//     // console.log(entries[1][1]);
//     // const exactlyPrice = entries2[1][1]

//     return entries2[1][1]
// }

// console.log(bookPrice("life of hitler").then((value) => { console.log(value) })

// bookPrice("life of hitler")
// bookPrice("life of hitler").then((value) => { console.log(value) })
// bookPrice("life of hitler").then((value) => {
//     const price = value;

//     console.log(price)
// })
// const exactlyPrice = (bookPrice("life of hitler").then((value) => {
//     return value

// }))
// console.log(exactlyPrice)




