import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserNav.css'; // Updated CSS filename

// Update with your logo
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Import Offcanvas

function TribalNav({ size, setShow }) {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeBackground);

      return () => {
        window.removeEventListener('scroll', changeBackground);
      };
    }
  }, []);

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <Navbar expand="lg" className={`${navbar ? 'tribal-navbar-active fixed-top shadow-lg tribal-slide-in-blurred-top' : 'tribal-navbar shadow-lg fixed-top'}`}>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img className="tribal-nav-logo tribal-fade-in" src="https://www.tribesindia.com/wp-content/uploads/2020/07/logo_sweta.png" alt="Tribal Handicrafts Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto tribal-navbar-links">
              <Nav.Link onClick={() => setShow(true)} className={`${navbar ? 'tribal-nav-link-scroll tribal-fade-in' : 'tribal-nav-link tribal-fade-in'}`}>
                <i className="fa-solid fa-house"></i> Home
              </Nav.Link>
              <Link to="/Product" className={`${navbar ? 'tribal-nav-link-scroll tribal-fade-in' : 'tribal-nav-link tribal-fade-in'}`}>
                <i className="fa-solid fa-store"></i> Shop
              </Link>
              <Link to="/Profile" className={`${navbar ? 'tribal-nav-link-scroll tribal-fade-in' : 'tribal-nav-link tribal-fade-in'}`}>
                <i className="fa-solid fa-user"></i> Profile
              </Link>
              <Link to="/about" className={`${navbar ? 'tribal-nav-link-scroll tribal-fade-in' : 'tribal-nav-link tribal-fade-in'}`}>
                About Us
              </Link>
              
              <Link to="/cart" onClick={() => setShow(false)} className={`${navbar ? 'tribal-nav-link-scroll tribal-fade-in' : 'tribal-nav-link tribal-fade-in'}`}>
                Cart <span><i className="fas fa-cart-plus"></i></span> <span>{size}</span>
              </Link>
              <Nav.Link onClick={handleSignOut} className={`${navbar ? 'tribal-nav-link-scroll tribal-fade-in' : 'tribal-nav-link tribal-fade-in'}`}>
                <i className="fa-solid fa-right-from-bracket"></i> Log out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TribalNav;
