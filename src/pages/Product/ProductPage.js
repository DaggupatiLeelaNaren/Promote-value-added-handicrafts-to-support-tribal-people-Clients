import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import Product from '../Product/Product'; // Import Product component
import '../Product/ProductPage.css'; // Import the CSS file for the product page

const ProductsPage = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Handwoven Basket',
      price: 29.99,
      description: 'An eco-friendly basket intricately handwoven by tribal artisans using natural fibers.',
      imageSrc: 'https://m.media-amazon.com/images/I/41NAyPUZ4wL.jpg',
    },
    {
      id: 2,
      name: 'Clay Pottery Set',
      price: 49.99,
      description: 'A traditional clay pottery set crafted with precision by skilled tribal potters.',
      imageSrc: 'https://img.freepik.com/premium-photo/tribal-pottery-amerindian-carved-clay-pot-with-patterns_899449-249720.jpg?w=1380',
    },
    {
      id: 3,
      name: 'Beaded Necklace',
      price: 19.99,
      description: 'A vibrant handmade necklace showcasing the exquisite beadwork of tribal craftsmen.',
      imageSrc: 'https://m.media-amazon.com/images/I/81xzE-63CNL.AC_UY300.jpg',
    },
    {
      id: 4,
      name: 'Wooden Carving',
      price: 39.99,
      description: 'A beautifully carved wooden artifact made by tribal woodworkers.',
      imageSrc: 'https://www.gitagged.com/wp-content/uploads/2021/06/Bastar-Wooden-Tribal-Life-Artwork-1-300x300.jpg',
    },
    {
      id: 5,
      name: 'Tribal Painting',
      price: 59.99,
      description: 'A mesmerizing painting created by skilled tribal artists.',
      imageSrc: 'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/86868/252201/1658165357848_Tribal_Art-Kilbil_6__36625.1687004462.jpg?c=2 ',
    },
    {
      id: 6,
      name: 'Handwoven Mat',
      price: 24.99,
      description: 'A durable and eco-friendly mat made using traditional weaving techniques.',
      imageSrc: 'https://m.media-amazon.com/images/I/71RRBRw013L.jpg',
    },
    {
      id: 7,
      name: 'Bamboo Lamp',
      price: 74.99,
      description: 'An elegant lamp handcrafted from sustainable bamboo.',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ubj2mxZvW3yL7YHXHddGVT-Z-kIompsUpw&s',
    },
    {
      id: 8,
      name: 'Tribal Earrings',
      price: 14.99,
      description: 'Stylish and colorful earrings crafted by tribal artisans.',
      imageSrc: 'https://www.tribesindia.com/wp-content/uploads/2023/11/1TMTEARCG01199.jpeg',
    },
    {
      id: 9,
      name: 'Ceramic Vase',
      price: 34.99,
      description: 'A charming vase made with precision by tribal potters.',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk0fJE5uOZ5QQS8wAw7L91lGoWyyZEAdohw&s',
    },
  ]);

  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const proceedToCheckout = () => {
    // Navigate to the Cart page and pass cart data as state
    navigate('/cart', { state: { cart } });
  };

  return (
    <div className="products-page">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">Tribal Handicrafts</Link>
          <ul className="navbar-links">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/cart">Cart ({cart.length})</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <h1>Support Tribal Artisans: Handicrafts</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Product
              title={product.name}
              price={product.price}
              description={product.description}
              imageSrc={product.imageSrc}
            />
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="checkout-button-container">
        <button className="checkout-button" onClick={proceedToCheckout}>
          Proceed to Checkout ({cart.length} items)
        </button>
      </div>
      
      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Tribal Handicrafts | All Rights Reserved</p>
        <p>Contact us: contact@tribalhandicrafts.com</p>
      </footer>
    </div>
  );
};

export default ProductsPage;
