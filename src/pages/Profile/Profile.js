import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token'); // Get token from localStorage

      if (!token) {
        navigate('/login'); // If no token, redirect to login
        return;
      }

      try {
        const response = await axios.get('http://localhost:8090/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data); // Set the user data
        setLoading(false); // Data is loaded
      } catch (error) {
        setError('Failed to fetch user profile');
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchUserProfile(); // Fetch the user profile when the component mounts
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* You can add other fields here as needed */}
      </div>
      <button onClick={() => navigate('/home')}>Go to Home</button>
    </div>
  );
};

export default Profile;
