import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";  // Import useNavigate
import "./Cart.css";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Initialize useNavigate
  const [cart, setCart] = useState(
    location.state?.cart.map((item) => ({ ...item, quantity: 1 })) || []
  );

  const handleIncreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 5.0; // Fixed shipping cost
  const total = subtotal + shipping;

  // Handle Checkout Button click
  const handleCheckout = () => {
    // Navigate to the payment page (assuming "/payment" is the route)
    navigate("/Checkout");
  };

  return (
    <div className="shopping-cart-container">
      {/* Shopping Cart Section */}
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-info">
                <img src={item.imageSrc} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: €{item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <div className="cart-item-total">
                €{(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="cart-item-remove"
                onClick={() => handleRemoveItem(item.id)}
              >
                ×
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <Link to="/Product" className="back-to-shop">
          ← Back to shop
        </Link>
      </div>

      {/* Summary Section */}
      <div className="summary">
        <h2>Summary</h2>
        <div className="summary-row">
          <span>ITEMS {cart.reduce((total, item) => total + item.quantity, 0)}</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <label htmlFor="shipping">SHIPPING</label>
          <select id="shipping" defaultValue={shipping}>
            <option value={5.0}>Standard-Delivery - €5.00</option>
            <option value={10.0}>Express-Delivery - €10.00</option>
          </select>
        </div>
        <div className="summary-total">
          <span>TOTAL PRICE</span>
          <span>€{total.toFixed(2)}</span>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>CHECKOUT</button> {/* Call handleCheckout on button click */}
      </div>
    </div>
  );
};

export default Cart;
