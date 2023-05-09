const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const axios = require('axios')
const router = express.Router()


router.post("/pay", async(req, res, next) => {

    const q = req.body
    let errorData = null
    let statusCode = 200;

    let paymentMethod = null
    let paymentIntents = null
    

    try {

        paymentMethod = await stripe.paymentMethods.create({
            type: 'card',
            card: {
              number: q.card,
              exp_month: q.month,
              exp_year: q.year,
              cvc: q.cvc,
            },
        });

        paymentIntents = await stripe.paymentIntents.create({
            amount: q.amount,
            currency: 'eur',
            automatic_payment_methods: {enabled: false},
            payment_method: paymentMethod.id,
            receipt_email: q.email,
        });
        
        paymentIntents = await stripe.paymentIntents.confirm(paymentIntents.id);

    } catch (error) {
        console.log(error.raw)
        errorData = {
            msg: error.message,
            statusCode: error.statusCode
        }
    }


    if (errorData) {
        statusCode = errorData.statusCode
    }


    res.status(statusCode).send({
        paymentMethod: paymentMethod, // Remove in Production - for DEBUGGING
        paymentIntents: paymentIntents, // Remove in Production - for DEBUGGING
        error: errorData
    })

})


module.exports = router