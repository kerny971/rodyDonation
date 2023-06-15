const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const router = express.Router()


// Without Stripe 3DS
// router.post("/pay", async(req, res, next) => {
//
//     const q = req.body
//     let errorData = null
//     let statusCode = 200;
//
//     let paymentMethod = null
//     let paymentIntents = null
//
//
//     try {
//
//         paymentMethod = await stripe.paymentMethods.create({
//             type: 'card',
//             card: {
//               number: q.card,
//               exp_month: q.month,
//               exp_year: q.year,
//               cvc: q.cvc,
//             },
//         });
//
//         paymentIntents = await stripe.paymentIntents.create({
//             amount: q.amount,
//             currency: 'eur',
//             automatic_payment_methods: {enabled: false},
//             payment_method: paymentMethod.id,
//             receipt_email: q.email,
//         });
//
//         paymentIntents = await stripe.paymentIntents.confirm(paymentIntents.id);
//
//     } catch (error) {
//         console.log(error.raw)
//         errorData = {
//             msg: error.message,
//             statusCode: error.statusCode
//         }
//     }
//
//
//     if (errorData) {
//         statusCode = errorData.statusCode
//     }
//
//
//     res.status(statusCode).send({
//         paymentMethod: paymentMethod, // Remove in Production - for DEBUGGING
//         paymentIntents: paymentIntents, // Remove in Production - for DEBUGGING
//         error: errorData
//     })
//
// })


router.post("/pay-secure", async(req, res) => {

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
            payment_method: paymentMethod.id,
            automatic_payment_methods: {enabled: false},
            payment_method_options: {
                card: {
                    request_three_d_secure: 'any'
                }
            },
            receipt_email: q.email,
        });

        paymentIntents = await stripe.paymentIntents.confirm(paymentIntents.id, { return_url: process.env.STRIPE_RETURN_URL });

    } catch (error) {
        errorData = {
            msg: error.message,
            statusCode: error.statusCode
        }
    }


    if (errorData) {
        statusCode = errorData.statusCode
    }


    res.status(statusCode).send({
        paymentIntents: paymentIntents, // Remove in Production - for DEBUGGING
        error: errorData
    })

})


router.post('/confirm', async (req, res) => {

    const pi = req.body;
    let paymentIntent = null;
    let errorData = null;
    let statusCode = 200;


    try {
        paymentIntent = await stripe.paymentIntents.retrieve(pi.id);
        if (paymentIntent.last_payment_error) {
            errorData = {
                message: paymentIntent.last_payment_error.message,
                statusCode: 401
            }
        }
        console.log(paymentIntent);
    } catch (e) {
        console.log('error')
        console.log(e)
        errorData = {
            message: e.message,
            statusCode: e.statusCode
        }
    }

    if (errorData) {
        statusCode = errorData.statusCode
    }


    res.status(statusCode).send({
        paymentIntent: paymentIntent, // Remove in Production - for DEBUGGING
        error: errorData
    })
})



module.exports = router
