import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';

import { cart, successMessage } from 'utils';
import CheckoutForm from 'components/checkout-form';
import stripePromise from 'config/stripe.config';

const App = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div className="container">
      <div className="row s-box">
        {paymentCompleted ? successMessage() : <React.Fragment>
          <div className="col-md-5 order-md-2 mb-4">
            {cart()}
          </div>
          <div className="col-md-7 order-md-1">
            <Elements stripe={stripePromise}>
              <CheckoutForm amount={2000} setPaymentCompleted={setPaymentCompleted} />
            </Elements>
          </div>
        </React.Fragment>}
      </div>

    </div>
  );
};

export default App;
