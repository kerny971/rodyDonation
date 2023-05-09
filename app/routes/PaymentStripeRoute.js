const express = require("express")
const PaymentController = require("../controllers/PaymentController")

const app = express()

app.use("/", PaymentController)

module.exports = app