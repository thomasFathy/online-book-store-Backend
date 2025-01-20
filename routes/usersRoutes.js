const express = require("express")
const router = express.Router()
const UsersController = require("../controllers/usersController")
const User = require("../models/User")
const usersController = new UsersController(User)
const validateToken = require("../middleware/validateTokenHandler")


router.post("/register", usersController.registerUser)
router.post("/login", usersController.loginUser)
// router.get("/get-current-user", validateToken, usersController.currentUser)
module.exports = router
