import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>About Us</h4>
              <ul>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Skill Development</a></li>
                <li><a href="#">Empowering Tribes</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Shipping & Delivery</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Payment Options</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Shop Handicrafts</h4>
              <ul>
                <li><a href="#">Handwoven Baskets</a></li>
                <li><a href="#">Traditional Jewelry</a></li>
                <li><a href="#">Carved Wooden Artifacts</a></li>
                <li><a href="#">Pottery & Ceramics</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
