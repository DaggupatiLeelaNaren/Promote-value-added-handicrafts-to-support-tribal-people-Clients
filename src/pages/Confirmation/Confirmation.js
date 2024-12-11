import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Confirmation.css";

const Confirmation = () => {
  const location = useLocation(); // Access the location object
  const navigate = useNavigate();

  // Log the location.state to see if data is passed
  console.log(location.state); // This will help you check if the data is passed

  // Destructure the customer and order summary details from the state
  const { name, phone, email, address, orderSummary } = location.state || {};

  // Check if orderSummary is undefined and provide fallback values
  const items = orderSummary?.items || 0;
  const subtotal = orderSummary?.subtotal || 0;
  const shipping = orderSummary?.shipping || 0;
  const total = orderSummary?.total || 0;

  // Check if customer data is missing and set fallback values
  const customerName = name || "Unknown";
  const customerPhone = phone || "N/A";
  const customerEmail = email || "N/A";
  const customerAddress = address || "N/A";

  // Go back to home page after confirmation
  const handleGoHome = () => {
    navigate("/Home");
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-message">
        <h2>Thank You for Your Order, {customerName}!</h2>
        <p>Your order has been successfully placed.</p>
        <p>We will send a confirmation email to {customerEmail} shortly.</p>
      </div>

      {/* Order Summary */}
      <section className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Name:</span>
          <span>{customerName}</span>
        </div>
        <div className="summary-row">
          <span>Phone:</span>
          <span>{customerPhone}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Address:</span>
          <span>{customerAddress}</span>
        </div>
        <div className="summary-row">
          <span>Items:</span>
          <span>{items}</span>
        </div>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>€{shipping.toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span>Total:</span>
          <span>€{total.toFixed(2)}</span>
        </div>
      </section>

      {/* Button to navigate to the homepage */}
      <button className="go-home-btn" onClick={handleGoHome}>
        Go Back to Home Page
      </button>
    </div>
  );
};

export default Confirmation;
