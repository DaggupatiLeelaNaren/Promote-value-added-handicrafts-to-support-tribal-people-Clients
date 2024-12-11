import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdLogin.css'
const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      alert('Login Successful');
      navigate('/adhome'); // Redirect to the user dashboard
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-page pt-3">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-row justify-content-center mt-3">
            <div className="login-container shadow-lg">
              <h1 className="login-heading fade-in">Welcome Back</h1>
              <p className="login-description fade-in">Sign in with your account</p>
              <form className="mt-4">
                <div className="mb-3">
                  <label className="login-label fade-in">Username</label>
                  <div>
                    <input
                      required
                      className="login-input fade-in"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your username"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="login-label fade-in">Password</label>
                  <div>
                    <input
                      required
                      className="login-input fade-in"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button className="login-btn fade-in" type="button" onClick={handleLogin}>
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
