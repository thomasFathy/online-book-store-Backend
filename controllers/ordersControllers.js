const Book = require("../models/Book")
const User = require("../models/User")

class OrdersController {
    constructor(order) {
        this.order = order
    }

    getOrders = async (request, response) => {
        try {
            const orders = await this.order.find({ user_email: request.user.email })
            response.json(orders)
        } catch (error) {
            response.json({ message: error.message })
        }

    }

    // extractPriceOfBook = async (nameOfBook) => {

    //     const price = await Book.findOne({ name: nameOfBook }).select("price")
    //     let entries = Object.entries(price)
    //     entries = Object.entries(entries[2][1])
    //     const exactlyPrice = entries[1][1]
    //     return exactlyPrice

    // }

    // showUpdatedBook = async (Book, amount) => {
    //     const updateBook = await Book.findByIdAndUpdate(Book.Id, { countInStock: (Book.countInStock - amount) })
    //     return updateBook
    // }

    // updateBookAfterOrder =async(id)=>{

    // }



    createOrders = async (request, response) => {
        const book = await Book.findOne({ name: request.body.book_name })
        if (book) {
            if (book.countInStock >= request.body.amount) {

                // console.log(request.user.email)
                // console.log(request.user.id)
                const newOrder = await this.order.create({
                    book_name: request.body.book_name,
                    amount: request.body.amount,
                    user_id: request.user.id,
                    user_email: request.user.email,
                    totalPrice: book.price * request.body.amount,
                })
                response.json(newOrder)
                await Book.findByIdAndUpdate(book.id, { countInStock: (book.countInStock - request.body.amount) })
            } else {
                response.status(404).send(`This amount is too much than exist ...... ${book.countInStock} in stock `)
            }
        } else {
            response.status(404).send(`book is not exist`)
        }
    }


    deleteOrder = async (request, response) => {
        try {
            const deletedOrder = await this.order.findByIdAndDelete(request.params.id)
            response.json(deletedOrder)
        } catch (error) {
            response.json({ message: error.message })
        }

    }


    deleteManyOrders = async (request, response) => {
        try {
            const deletedBooks = await this.order.deleteMany({ user_email: request.body.user_email })
            // const deletedBooks = await this.order.deleteMany()
            response.json(deletedBooks)
        } catch (error) {
            response.json({ message: error.message })
        }
    }

}


module.exports = OrdersController 