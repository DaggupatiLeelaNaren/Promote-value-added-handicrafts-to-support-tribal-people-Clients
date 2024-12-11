// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8090/api/auth/register', {
                username,
                password,
                email,
            });
            setMessage(`User ${response.data.username} registered successfully!`);
            alert('Registration Succesful');
            navigate('/login');
        } catch (error) {
            setMessage('Registration failed. Try again.');
        }
    };

    return (
        



<div className="signup-page pt-3">
<div className="container">
  <div className="row">
    <div className="col-12  d-flex flex-row justify-content-center  mt-3  ">
      <div className="signup-container shadow-lg ">
        <h1 className="sign-up-heading fade-in">Welcome</h1>
        <p className="sign-up-dis fade-in">Sign up with your valuable details </p>
        <form onSubmit={handleRegister} className="mt-4">
          <div className="mb-1">
            <label className="sign-up-label fade-in">Username</label>
            <div>
            <input placeholder='Enter Your Username'  className="sign-up-input fade-in" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
          </div>
          <div className="mb-1">
            <label className="sign-up-label fade-in">Password</label>
            <div>
            <input placeholder='Enter Your Password'  className="sign-up-input fade-in" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>
          <div className="mb-1 mt-2">
            <label className="sign-up-label fade-in">Email</label>
            <div>
            <input placeholder='Enter Your Email'  className="sign-up-input fade-in" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          </div>
         
          <div className="mt-5">
            <button className="signup-btn fade-in" type="submit" value="Signup">SIGNUP</button>
            <p className="sign-up-dis mt-2 fade-in">Already have an account? <Link style={{"textDecoration":"none"}} to="/login"><span className="sigin-link" >Sign In</span></Link></p>
          </div>
        </form>
      </div>
      <div className=" d-md-block d-none ">
        <img className="signup-img fade-in" src="https://img.freepik.com/free-photo/antique-vase-with-indigenous-pattern_23-2151585774.jpg?semt=ais_hybrid" alt="" />
      </div>
    </div>
  </div>
</div>
</div>


    );
};

export default Register;
