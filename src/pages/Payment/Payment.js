import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    paypalEmail: "",
    stripeToken: "",
    applePayToken: "",
    googlePayToken: "",
  });

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment submitted with ${paymentMethod}`);
    navigate("/confirmation");
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Payment Information</h2>

      <div className="payment-methods">
        <label className="payment-method-label">
          <input
            type="radio"
            value="credit-card"
            checked={paymentMethod === "credit-card"}
            onChange={handlePaymentMethodChange}
            className="payment-method-radio"
          />
          Credit/Debit Card
        </label>
        <label className="payment-method-label">
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={handlePaymentMethodChange}
            className="payment-method-radio"
          />
          PayPal
        </label>
        <label className="payment-method-label">
          <input
            type="radio"
            value="stripe"
            checked={paymentMethod === "stripe"}
            onChange={handlePaymentMethodChange}
            className="payment-method-radio"
          />
          Stripe
        </label>
        <label className="payment-method-label">
          <input
            type="radio"
            value="apple-pay"
            checked={paymentMethod === "apple-pay"}
            onChange={handlePaymentMethodChange}
            className="payment-method-radio"
          />
          Apple Pay
        </label>
        <label className="payment-method-label">
          <input
            type="radio"
            value="google-pay"
            checked={paymentMethod === "google-pay"}
            onChange={handlePaymentMethodChange}
            className="payment-method-radio"
          />
          Google Pay
        </label>
        <label className="payment-method-label">
          <input
            type="radio"
            value="cash-on-delivery"
            checked={paymentMethod === "cash-on-delivery"}
            onChange={handlePaymentMethodChange}
            className="payment-method-radio"
          />
          Cash on Delivery
        </label>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        {paymentMethod === "credit-card" && (
          <div className="credit-card-form">
            <h3 className="form-heading">Credit/Debit Card Payment</h3>
            <div className="input-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Enter card number"
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label>Cardholder Name</label>
              <input
                type="text"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleInputChange}
                placeholder="Enter cardholder name"
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label>Expiry Date (MM/YY)</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="Enter CVV"
                required
                className="input-field"
              />
            </div>
          </div>
        )}

        {paymentMethod === "paypal" && (
          <div className="paypal-form">
            <h3 className="form-heading">PayPal Payment</h3>
            <div className="input-group">
              <label>PayPal Email</label>
              <input
                type="email"
                name="paypalEmail"
                value={formData.paypalEmail}
                onChange={handleInputChange}
                placeholder="Enter PayPal email"
                required
                className="input-field"
              />
            </div>
          </div>
        )}

        {paymentMethod === "stripe" && (
          <div className="stripe-form">
            <h3 className="form-heading">Stripe Payment</h3>
            <div className="input-group">
              <label>Stripe Token</label>
              <input
                type="text"
                name="stripeToken"
                value={formData.stripeToken}
                onChange={handleInputChange}
                placeholder="Stripe Token"
                required
                className="input-field"
              />
            </div>
          </div>
        )}

        {paymentMethod === "apple-pay" && (
          <div className="apple-pay-form">
            <h3 className="form-heading">Apple Pay Payment</h3>
            <div className="input-group">
              <label>Apple Pay Token</label>
              <input
                type="text"
                name="applePayToken"
                value={formData.applePayToken}
                onChange={handleInputChange}
                placeholder="Apple Pay Token"
                required
                className="input-field"
              />
            </div>
          </div>
        )}

        {paymentMethod === "google-pay" && (
          <div className="google-pay-form">
            <h3 className="form-heading">Google Pay Payment</h3>
            <div className="input-group">
              <label>Google Pay Token</label>
              <input
                type="text"
                name="googlePayToken"
                value={formData.googlePayToken}
                onChange={handleInputChange}
                placeholder="Google Pay Token"
                required
                className="input-field"
              />
            </div>
          </div>
        )}

        {paymentMethod === "cash-on-delivery" && (
          <div className="cash-on-delivery-form">
            <h3 className="form-heading">Cash on Delivery</h3>
            <p className="cash-on-delivery-info">
              You can pay with cash when your order arrives at your doorstep.
              Please make sure to have the exact amount ready.
            </p>
          </div>
        )}

        <button type="submit" className="submit-button">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
