import React from 'react';
import './AdHome.css';
import AdminNav from '../AdminNav/AdNav';

function AdHome() {
  return (
    <div>
        <AdminNav/>
    <div className="home-container">
      <div className="home-card">
        

        <div className="home-card-content">
          <p className="home-card-hea1">WELCOME TO THE TRIBAL HANDICRAFTS PROJECT</p>
          <h1 className="home-card-hea2">Promote Value-Added Handicrafts</h1>
          <p className="home-card-dis mt-4">
            “Empower tribal communities through skill development and promote their exquisite handicrafts.”
          </p>
          <div className="home-card-buttons mt-5">
            <button className='home-card-btn1'>Explore Crafts</button>
            <button className='home-card-btn2'>Learn More</button>
          </div>
        </div>

       
      </div>
    </div>
    </div>
  );
}

export default AdHome;
