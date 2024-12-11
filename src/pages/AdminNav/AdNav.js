import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './AdNav.css';

function AdminNav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
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

  return (
    <Navbar expand="lg" className={`${navbar ? 'active fixed-top shadow-lg slide-in-blurred-top' : 'Navbar fixed-top'}`}>
      <Container>
        <Navbar.Brand href="#" className="text-white">
          <img className="logo" src="https://www.tribesindia.com/wp-content/uploads/2020/07/logo_sweta.png" alt="Logo" />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto m-auto my-2 my-lg-0 NavBarLinks" navbarScroll>
            <Link style={{ textDecoration: 'none' }} to="/admin/dashboard">
              <Nav.Link className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>
                <i className="fa-solid fa-house"></i>Dashboard
              </Nav.Link>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/admin/products">
              <Nav.Link className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>
                <i className="fa-solid fa-box"></i>Products
              </Nav.Link>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/admin/orders">
              <Nav.Link className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>
                <i className="fa-solid fa-shopping-cart"></i>Orders
              </Nav.Link>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/admin/users">
              <Nav.Link className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>
                <i className="fa-solid fa-users"></i>Users
              </Nav.Link>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/admin/reports">
              <Nav.Link className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>
                <i className="fa-solid fa-chart-line"></i>Reports
              </Nav.Link>
            </Link>
          </Nav>
          <button className="nav-btn">Logout</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNav;
