import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

class Checkout extends React.Component {
    onToken = (token, addresses) => {
      };
  render() {
    return (
      <StripeCheckout
        label="Pay Now"
        description="ValetX Payment"
        stripeKey="pk_test_PeFrBBCsz85UBp5cmKnHpXkR00QF4Yu4E4"
        token={this.onToken}
      />
    )
  }
}

export default Checkout;