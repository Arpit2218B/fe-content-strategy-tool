import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

const useRazorpaySubscription = (t) => {
    const [subscriptionConfig, setSubscriptionConfig] = useState(t || {});
    const [orderData, setOrderData] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const createOrder = async () => {
        setLoading(true);
        setError('');
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            setError('Failed to load Razorpay.')
            setLoading(false);
        }

        const orderResponse = await axios.post(subscriptionConfig.orderURL, {});

        
        const { id: order_id, currency } = orderResponse.data;
        setOrderData(orderResponse.data);

        const options = {
            key: subscriptionConfig.key, // Enter the Key ID generated from the Dashboard
            currency: currency,
            name: subscriptionConfig?.user?.fullName || "",
            description: "Subscription for curate",
            subscription_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    user: subscriptionConfig?.user,
                    orderData: orderData,
                };

                const result = await axios.post(subscriptionConfig.verifyURL, data);
                if(result.status !== 201) {
                    setError('Could not verify transaction');
                    return;
                }
                toast('Payment done successfully');
                setSuccess(true);
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open(); 
        setLoading(false);
    }

    return [error, loading, success, createOrder];
}

export default useRazorpaySubscription;