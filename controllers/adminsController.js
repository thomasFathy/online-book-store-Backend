const { findById } = require("../models/Book")
const Order = require("../models/Order")
const BooksController = require("./booksController")

class adminsController extends BooksController {
    constructor(admin, user, book, order) {
        super()
        this.admin = admin
        this.user = user
        this.book = book
        this.order = order
    }



    getBooks = async (request, response) => {
        try {
            const books = await this.book.find()
            response.json(books)
        } catch (error) {
            response.json({ message: error.message })
        }
    }


    getBookById = async (request, response) => {
        try {
            const book = await this.book.findById(request.params.id)
            response.json(book)
        } catch (error) {

            response.json({ message: error.message })
        }
    }

    createBooks = async (request, response) => {
        try {
            const newBook = await this.book.create({
                name: request.body.name,
                type: request.body.type,
                countInStock: request.body.countInStock,
                price: request.body.price
            })
            response.json(newBook)
        }
        catch (error) {
            response.json({ message: error.message })
        }
    }

    updateBooks = async (request, response) => {
        try {
            await this.book.findByIdAndUpdate(request.params.id, request.body)
            response.json(await this.book.findById(request.params.id))
        } catch (error) {
            response.json({ message: error.message })
        }
    }

    deleteBook = async (request, response) => {
        try {
            if (await this.book.findOne({ id: request.params.id })) {
                const deletedBook = await this.book.findByIdAndDelete(request.params.id)
                response.json(deletedBook)
            } else { response.send("book is not exist ") }
        } catch (error) {
            response.json({ message: error.message })
        }
    }

    deleteAllBooks = async (request, response) => {
        try {
            response.json(await this.book.deleteMany())
            // if (await this.book.findOne({ name: request.body.name })) {
            //     const deletedBook = await this.book.deleteMany({ name: request.body.name })
            //     console.log({ name: request.body.name });
            //     response.json(deletedBook)
            // } else { response.send("book is not exist ") }
        } catch (error) {
            response.json({ message: error.message })
        }
    }

    getAllAdmins = async (request, response) => {
        try {
            const admins = await this.admin.find()
            response.json(admins)
        } catch (error) {
            response.json({ message: error.message })
        }
    }

    getAllUsers = async (request, response) => {
        try {
            const users = await this.user.find()
            response.json(users)
        } catch (error) {
            response.json({ message: error.message })
        }
    }

    deleteUser = async (request, response) => {
        try {
            const deletedUser = await this.user.findByIdAndDelete(request.params.id)
            response.json(deletedUser)
        } catch (error) {
            response.json({ message: error.message })
        }
    }


    createAdmins = async (request, response) => {
        try {
            const name = request.body.name
            const newAdmin = await this.admin.create({ name })
            response.json(newAdmin)
        } catch (error) {
            response.json({ message: error.message })
        }
    }

    getOrders = async (request, response) => {
        try {
            const orders = await this.order.find()
            response.json(orders)
        } catch (error) {
            response.json({ message: error.message })
        }

    }

}
module.exports = adminsController