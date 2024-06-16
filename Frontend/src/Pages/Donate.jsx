import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import './Donate.css'; 

const stripePromise = loadStripe('pk_test_51PQixw062pRH9Zq8xwAPv8U29DSMVOstBOfcDk1fJBc0yTdiax0P870cjcWnE4IWGIu7vW33M41FvjLK4ptPC6o900gtXIAthL');

function Donate() {
    const [amount, setAmount] = useState('');
    const [search,setSearch]=useSearchParams();
    const success=search.get('success');
    const error=search.get('error');

    async function createCheckoutSession() {
        const stripe = await stripePromise;

        try {
            const response = await axios.post('http://localhost:5001/pay/pay', { amount: parseFloat(amount) });
            const { id } = response.data;

            const { error } = await stripe.redirectToCheckout({ sessionId: id });

            if (error) {
                console.error('Error redirecting to Stripe Checkout:', error);
            }
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    const handleAmount = (e) => {
        e.preventDefault();
        createCheckoutSession();
    };

    useEffect(()=>{
       if(success)
       {
          toast.success("payment done")
       }
       if(error)
       {
         toast.error("error")
       }
    },[])

    return (
        <>
            <Navbar />
            <ToastContainer/>
            <div className="donate-container">
                <div className="donate-content">
                    <h1>Make a Difference Today</h1>
                    <p>Your donation can help provide shelter, food, and medical care to countless animals in need. Together, we can give these animals a second chance at life and a loving home.</p>
                    <p>Every contribution, no matter how small, makes a significant impact. Join us in our mission to rescue, rehabilitate, and rehome animals in need.</p>
                    
                    <form onSubmit={handleAmount} className="donate-form">
                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter the amount"
                                id="paymentId"
                                onChange={(e) => setAmount(e.target.value)}
                                required
                                min="1"
                            />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-success form-control">
                                DONATE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
          <Footer/>
        </>
    );
}

export default Donate;
