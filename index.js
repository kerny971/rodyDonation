require('dotenv').config()
const express = require('express')
const HomeRoute = require('./app/routes/HomeRoute')
const PaymentStripeRoute = require('./app/routes/PaymentStripeRoute')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

const corsOptions = {
  origin: process.env.CORS_ORIGIN
}

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(cors(corsOptions))
app.use("/", HomeRoute)
app.use("/stripe", PaymentStripeRoute)


app.listen(process.env.LISTEN_PORT)
