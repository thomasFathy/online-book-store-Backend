const bcrypt = require("bcrypt")
const createToken = require("../middleware/generateTokens")
const Book = require("../models/Book")




class UserController {

    constructor(user) {
        this.user = user
    }


    registerUser = async (request, response) => {
        try {
            const { email, password } = request.body
            const user = await this.user.findOne({ email })
            if (!user) {
                const hashedPassword = await bcrypt.hash(password, 10)
                const newUser = await this.user.create({
                    email,
                    password: hashedPassword,
                })

                response.json({
                    email: newUser.email,
                    password: newUser.password,
                    user_token: createToken(newUser.id),
                })
            } else {
                response.send("User is already registered")
            }
        } catch (error) {
            response.json({ message: error.message })
        }
    }




    loginUser = async (request, response) => {

        try {
            const { email, password } = request.body;
            // check if user exists && the password is compatiable
            const user = await this.user.findOne({ email })
            const isPasswordCompatible = await bcrypt.compare(password, user.password)

            if (user && isPasswordCompatible) {
                response.json({
                    id: user.id,
                    email: user.email,
                    password: user.password,
                    user_token: createToken(user.id)
                })

            }
            else { response.send("user is not registered") }
        } catch (error) {
            response.send("user is not registered")
        }
    }

    // currentUser = async (request, response) => {
    //     try {
    //         response.json(await Book.find())
    //     } catch (error) {
    //         response.json({ message: error.message })
    //     }
    // }





}

module.exports = UserController