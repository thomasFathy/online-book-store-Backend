const express = require('express')
const router = express.Router()
const BooksController = require("../controllers/booksController")
const Admin = require('../models/Admin')
const User = require("../models/User")
const Book = require("../models/Book")
const Order = require("../models/Order")
const booksController = new BooksController(Admin, User, Book, Order)

router.route("/get-books").get(booksController.getBooks)

// router.route("/:id").get(booksController.getBook).put(booksController.updateBooks).delete(booksController.deleteBooks)
// router.route("/create-new-book").post(booksController.createBooks)




module.exports = router
