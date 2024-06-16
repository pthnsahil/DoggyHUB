const stripe=require('stripe')('sk_test_51PQixw062pRH9Zq85e901UQkr9g1Wbn152VnExAHEBemN2qaLh6D9WY3j1qVGfqRw7JPhvVteu3JqfxETu43QrJt002MviIBDZ')

const pay=async(req,res)=>{
    const { amount } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Donation',
                    },
                    unit_amount: amount * 100,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `http://localhost:5173/donate?success=true`,
            cancel_url: `http://localhost:5173/donate?error=true`,
        });
        res.json({ id: session.id });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }


}
module.exports=pay;