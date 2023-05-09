const express = require("express")
const HomeController = require("../controllers/HomeController")

const app = express()

app.use("/", HomeController)

module.exports = app