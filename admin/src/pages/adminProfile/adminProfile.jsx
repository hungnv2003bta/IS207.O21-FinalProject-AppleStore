import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import axios from 'axios';
import './adminProfile.css';

const AdminProfile = () => {
  const [admin, setAdmin] = useState({
    id: '',
    name: '',
    email: '',
    phone_number: '',
    password: '',
    role_id: ''
  });
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Fetch admin data on component mount
  useEffect(() => {
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/admin');
      if (response.data) {
        setAdmin(response.data);
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/change-password', {
        email: admin.email, // Add the admin's email to the request
        oldPassword: oldPassword,
        newPassword: newPassword
      });
      if (response.data.message) {
        alert('Password changed successfully');
        setOldPassword('');
        setNewPassword('');
      } else {
        alert('Password change failed: ' + response.data.error);
      }
    } catch (error) {
      console.error('Failed to change password:', error);
      alert('Failed to change password: ' + error.message);
    }
  };

  return (
    <div className='adminProfile'>
      <Sidebar />
      <div className='adminProfile-container'>
        <h1>Admin Profile</h1>
        <div>
          <strong>Email:</strong> {admin.email}
        </div>
        <form onSubmit={handlePasswordChange}>
          <label htmlFor="oldPassword">Mật khẩu hiện tại:</label>
          <input
            type="text"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <label htmlFor="newPassword">Mật khẩu mới:</label>
          <input
            type="text"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit">Thay đổi mật khẩu</button>
        </form>
      </div>
    </div>
  );
}

export default AdminProfile;
