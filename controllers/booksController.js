const Book = require("../models/Book")

class BooksController {
    constructor(admin, user, book) {
        this.admin = admin
        this.user = user
        this.book = book
    }

    getBooks = async (request, reponse) => {
        try {
            const books = await this.book.find()
            reponse.json(books)
        } catch (error) {
            reponse.json({ message: error.message })
        }
    }

    getBookById = async (request, reponse) => {
        try {
            const book = await this.book.findById(request.params.id)
            reponse.json(book)
        } catch (error) {

            reponse.json({ message: error.message })
        }
    }

    createBooks = async (request, reponse) => {
        try {
            const newBook = await this.book.create({
                name: request.body.name,
                type: request.body.type,
                countInStock: request.body.countInStock,
                price: request.body.price
            })
            reponse.json(newBook)
        }
        catch (error) {
            reponse.json({ message: error.message })
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


    deleteBook = async (request, reponse) => {
        try {
            if (await this.book.findOne({ id: request.params.id })) {
                const deletedBook = await this.book.findByIdAndDelete(request.params.id)
                reponse.json(deletedBook)
            } else { reponse.send("book is not exist ") }
        } catch (error) {
            reponse.json({ message: error.message })
        }
    }
}
module.exports = BooksController

// const Book = require("../models/Book")

// class BooksController {
//     constructor(book) {
//         this.book = book
//     }

//     getBooks = async (request, reponse) => {
//         try {
//             const books = await this.book.find()
//             reponse.json(books)
//         } catch (error) {
//             reponse.json({ message: error.message })
//         }
//     }

//     getBookById = async (request, reponse) => {
//         try {
//             const book = await this.book.findById(request.params.id)
//             reponse.json(book)
//         } catch (error) {

//             reponse.json({ message: error.message })
//         }
//     }

//     createBooks = async (request, reponse) => {
//         try {
//             const newBook = await this.book.create({
//                 name: request.body.name,
//                 type: request.body.type,
//                 countInStock: request.body.countInStock,
//                 price: request.body.price
//             })
//             reponse.json(newBook)
//         } catch (error) {
//             reponse.json({ message: error.message })

//         }
//     }

//     updateBooks = async (request, reponse) => {
//         try {
//             const updatedBooks = await this.book.findByIdAndUpdate(request.params.id, request.body, { new: true })
//             reponse.json(updatedBooks)
//         } catch (error) {
//             reponse.json({ message: error.message })
//         }
//     }

//     deleteBooks = async (request, reponse) => {
//         try {
//             const deletedBooks = await this.book.findByIdAndDelete(request.params.id)
//             reponse.json({
//                 message: "deleted successfull"
//             })
//         } catch (error) {
//             reponse.json({ message: error.message })
//         }
//     }




// }






// module.exports = BooksController