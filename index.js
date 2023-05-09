require('dotenv').config()
const express = require('express')
const HomeRoute = require('./app/routes/HomeRoute')
const PaymentStripeRoute = require('./app/routes/PaymentStripeRoute')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

app.use(express.static('public'))

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(cors())
app.use("/", HomeRoute)
app.use("/stripe", PaymentStripeRoute)


app.listen(4000)