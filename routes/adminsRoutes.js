const express = require("express")
const router = express.Router()
const BooksController = require("../controllers/booksController")
const AdminsController = require("../controllers/adminsController")
const Admin = require('../models/Admin')
const User = require("../models/User")
const Book = require("../models/Book")
const Order = require("../models/Order")
const booksRoutes = require("../routes/booksRoutes")
const adminsController = new AdminsController(Admin, User, Book, Order)
const booksController = new BooksController(Admin, User, Book, Order)
const validateToken = require("../middleware/validateTokenHandler")

// router.use(validateToken)
router.get("/get-users", adminsController.getAllUsers)
router.delete("/delete-user/:id", adminsController.deleteUser)
router.post("/create-admin", adminsController.createAdmins)
router.get("/get-admins", adminsController.getAllAdmins)
router.get("/get-books", booksController.getBooks)
router.get("/get/:id", adminsController.getBookById)
router.post("/create-book", adminsController.createBooks)
router.delete("/delete-book/:id", adminsController.deleteBook)
router.delete("/delete-all-books/", adminsController.deleteAllBooks)
router.put("/update/:id", adminsController.updateBooks)
router.get("/get-orders", adminsController.getOrders)









// router.get("/get-users", booksController)
// router.delete("/delete-user/:id", adminsController.deleteUser)
// router.post("/create-admin", adminsController.createAdmins)
// router.get("/get-admins", adminsController.getAllAdmins)
// router.get("/get-books", adminsController.getBooks)
// router.get("/get/:id", adminsController.getBookById)
// router.post("/create-book", adminsController.createBooks)
// router.delete("/delete-book/:id", adminsController.deleteBook)
// router.delete("/delete-all-books/", adminsController.deleteAllBooks)
// router.put("/update/:id", adminsController.updateBooks)

module.exports = router