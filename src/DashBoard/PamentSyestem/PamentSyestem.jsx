import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";


const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const PamentSyestem = () => {
  return (
    <div>
      <SectionTitle
        heading={"Payment System"}
        subHeading={"Payment"}
      ></SectionTitle>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default PamentSyestem;
