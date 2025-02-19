import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../CheckoutForm2";
import { Modal, ModalBody, Button } from "react-bootstrap";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Payment = (props) => {
  const [clientSecret, setClientSecret] = React.useState("");
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  // React.useEffect(() => {
  //   fetch("../api/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ 
  //       items: [{ finalAmount: props.paymentData.finalAmount, 'currency': props?.paymentData?.currency}] }),
  //   })
  //   .then((res) => res.json())
  //   .then((data) => { setClientSecret(data.clientSecret)});
  // }, []);

  const appearance = {
    theme: 'stripe',
  };
  const loader = 'auto';
  const options = {
    clientSecret,
    appearance,
    loader
  };
  // {sessionStorage.getItem('currency') + sessionStorage.getItem('finalAmount')}
  return (
    <Modal size="lg" dialogClassName="" show={show} animation={true} backdrop="static" keyboard={false} style={{marginTop:'5%'}}>
    <Modal.Header className="">
      <Modal.Title>Total Amount: {props?.paymentData?.currency + ' ' + props?.paymentData?.visaPrice}</Modal.Title>
      <span className="close2" onClick={() => { props.handleCallback(false) }}>
        &times;
      </span>
     
    </Modal.Header>
    <Modal.Body show={show} options={options}>   
        <CheckoutForm userInfo={props.paymentData} /> 
    </Modal.Body>
  </Modal>
  );
}

export default Payment;