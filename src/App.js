import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Register from './pages/UserAuthentication/Register';
import Login from './pages/UserAuthentication/Login';
import PrivateRoute from './pages/UserAuthentication/PrivateRoute';
import TopScroll from './pages/BackToTopButton/BackToTopButton';
import UserHome from './pages/UserHome/UserHome';
import AdLogin from './pages/AdminAuthentication/AdLogin'
import AdHome from './pages/AdminHome/AdHome';
// import Product from './pages/Product/Product';
import ProductsPage from './pages/Product/ProductPage';
import Cart from './pages/Cart/Cart';
import AboutUs from './pages/Aboutus/About';
import ProfilePage from './pages/Profile/Profile';
import CheckoutPage from './pages/Product/Checkout';
import PaymentPage from './pages/Payment/Payment';
import ContactPage from './pages/Contact/Contact';
import Confirmation from './pages/Confirmation/Confirmation';

function App() {
  const isUserSignedIn = !!localStorage.getItem('token')
  return (
    <div>
        <TopScroll/>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adlogin" element={<AdLogin />} />
          <Route path="/adhome" element={<AdHome />} />
          <Route path="/Product" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
          <Route path="/Payment" element={<PaymentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          {
        isUserSignedIn && <Route
          path="/home"
          element={
           
              <UserHome/>
            
          }
        />
      }
        
          {/* Protect the "/protected" route */}
          <Route
            path="/protected"
            element={
              <PrivateRoute>
                <h1>Protected Page</h1>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
