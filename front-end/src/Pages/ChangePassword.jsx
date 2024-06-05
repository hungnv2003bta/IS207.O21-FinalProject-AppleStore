import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/ChangePassword.css';
import Navbar from '../Components/Navbar/Navbar'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user-info");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handlePasswordChange = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/change-user-password', {
        email: userInfo.email,
        oldPassword: oldPassword,
        newPassword: newPassword
      });

      if (response.data.message) {
        alert('Thay đổi mật khẩu thành công!');
        setOldPassword('');
        setNewPassword('');
      } else {
        throw new Error(response.data.error || 'Unknown error during password change');
      }
    } catch (error) {
      console.error('Failed to change password:', error);
      alert(`Thay đổi mật khẩu thất bại: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    
    <div className='changePassword'>
      <Navbar />
      <div className="changePassword-container">
      <h1>THAY ĐỔI MẬT KHẨU</h1>
      <div>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <form onSubmit={handlePasswordChange}>
          <div>
            <label htmlFor="oldPassword">Mật khẩu hiện tại:</label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword">Mật khẩu mới:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button id="changePassword-btn" type="submit">Thay đổi mật khẩu</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ChangePassword ;
