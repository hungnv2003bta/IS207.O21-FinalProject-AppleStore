import React, { useEffect, useState } from 'react';
import './CSS/UserProfile.css';
import Navbar from '../Components/Navbar/Navbar';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // Fetch user info from localStorage
    const storedUserInfo = localStorage.getItem("user-info");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));  // Parse the JSON string back to an object
    }
  }, []);

  return (
    <div className='userProfile'>
      <Navbar/>
      <div className='userProfile-container'>
        <h1>THÔNG TIN TÀI KHOẢN</h1>
        {userInfo && (
          <div>
            <p>Tên: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Số điện thoại: {userInfo.phone_number}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;