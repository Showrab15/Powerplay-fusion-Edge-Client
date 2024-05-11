import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitle";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISH_KEY);
const Payment = () => {
    const selectedClassData = useLoaderData();
    const classPrice = selectedClassData.classPrice;
    console.log(selectedClassData)
    return ( 
        <div>
            <SectionTitle heading={"Pay Now"} subHeading={"Pay for enrolling to class"}/>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClassData={selectedClassData} classPrice={classPrice}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;