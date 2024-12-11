import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate(); // For navigation
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [orderSummary, setOrderSummary] = useState({
    items: 2, // Example: two items in cart
    subtotal: 100, // Example: subtotal price in EUR
    shipping: 5, // Shipping cost
    total: 105, // Total price (Subtotal + Shipping)
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle "Make Payment" button click
  const handleMakePayment = (e) => {
    e.preventDefault();

    // Ensure the form data is valid
    if (formData.name && formData.phone && formData.email && formData.address) {
      // Navigate to the payment page with customer details and order summary
      navigate("/payment", {
        state: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          orderSummary: orderSummary,
        },
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="checkout-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            ShopName
          </a>
          <ul className="navbar-menu">
            <li>
              <a href="/home" className="navbar-link">Home</a>
            </li>
            <li>
              <a href="/products" className="navbar-link">Products</a>
            </li>
            <li>
              <a href="/cart" className="navbar-link">Cart</a>
            </li>
            <li>
              <a href="/checkout" className="navbar-link">Checkout</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Checkout Container */}
      <div className="checkout-container">
        <div className="checkout-flex-container">
          {/* Contact and Delivery Details */}
          <section className="contact-details">
            <h2>Contact & Delivery Details</h2>
            <form className="contact-form" onSubmit={handleMakePayment}>
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="phone">Phone <span className="required">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="address">Delivery Address <span className="required">*</span></label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="4"
                required
              ></textarea>
            </form>
          </section>

          {/* Order Review */}
          <section className="order-review">
            <h2>Review and Place Your Order</h2>
            <div className="order-summary">
              <div className="summary-row">
                <span>Items: {orderSummary.items}</span>
                <span>€{orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <label htmlFor="shipping">Shipping</label>
                <select
                  id="shipping"
                  defaultValue={orderSummary.shipping}
                  onChange={(e) => {
                    const newShipping = parseFloat(e.target.value);
                    setOrderSummary((prevSummary) => {
                      const newTotal = prevSummary.subtotal + newShipping;
                      return {
                        ...prevSummary,
                        shipping: newShipping,
                        total: newTotal,
                      };
                    });
                  }}
                >
                  <option value={5.0}>Standard Delivery - €5.00</option>
                  <option value={10.0}>Express Delivery - €10.00</option>
                </select>
              </div>
              <div className="summary-total">
                <span>Total Price</span>
                <span>€{orderSummary.total.toFixed(2)}</span>
              </div>
            </div>

            <button className="make-payment-btn" onClick={handleMakePayment}>
              Make Payment
            </button>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 ShopName. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="/terms" className="footer-link">Terms of Service</a></li>
            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
