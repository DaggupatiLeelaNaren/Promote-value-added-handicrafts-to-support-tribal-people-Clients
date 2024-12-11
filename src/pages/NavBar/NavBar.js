import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import '../Product/Product';

function NavScrollExample() {
  const [navbar, setNavbar] = useState(false);

  // Function to change navbar background based on scroll position
  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Add event listener for scroll behavior
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeBackground);

      return () => {
        window.removeEventListener('scroll', changeBackground);
      };
    }
  }, []);

  return (
    <Navbar expand="lg" className={`${navbar ? 'navbar-active fixed-top shadow-lg slide-in-blurred-top' : 'navbar-default fixed-top'}`}>
      <Container fluid>
        <Navbar.Brand href="#"><img className="navbar-logo fade-in" src="https://www.tribesindia.com/wp-content/uploads/2020/07/logo_sweta.png" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 m-auto navbar-links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className={`${navbar ? 'nav-link-scroll fade-in' : 'nav-link-default fade-in'}`} as={Link} to="/">Home</Nav.Link>
            <Nav.Link className={`${navbar ? 'nav-link-scroll fade-in' : 'nav-link-default fade-in'}`}>Blogs</Nav.Link>
            <Nav.Link className={`${navbar ? 'nav-link-scroll fade-in' : 'nav-link-default fade-in'}`} as={Link} to="/Product">Product</Nav.Link>
            <Nav.Link className={`${navbar ? 'nav-link-scroll fade-in' : 'nav-link-default fade-in'}`} as={Link} to="/login">Login</Nav.Link>
            <Nav.Link className={`${navbar ? 'nav-link-scroll fade-in' : 'nav-link-default fade-in'}`} as={Link} to="/register">Signup</Nav.Link>
            <Nav.Link className={`${navbar ? 'nav-link-scroll fade-in' : 'nav-link-default fade-in'}`}>About Us</Nav.Link>
          </Nav>
          <Form className="d-flex fade-in">
            <Form.Control
              type="search"
              placeholder="Search Handicrafts"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
