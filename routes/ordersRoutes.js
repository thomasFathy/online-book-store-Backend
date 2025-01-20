const express = require('express')
const router = express.Router()
const Order = require("../models/Order")
const OrdersController = require("../controllers/ordersControllers")
const ordersControllers = new OrdersController(Order)
const validateToken = require("../middleware/validateTokenHandler")

router.get("/get-orders", validateToken, ordersControllers.getOrders)
router.post("/create-order", validateToken, ordersControllers.createOrders)
router.delete("/delete-order", validateToken, ordersControllers.deleteOrder)
router.delete("/delete-orders-with-email", validateToken, ordersControllers.deleteManyOrders)
module.exports = router
