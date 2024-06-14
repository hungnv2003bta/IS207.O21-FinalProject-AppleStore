import React, { useEffect, useState } from 'react';
import './CSS/userProfile.css';
import Navbar from '../Components/Navbar/Navbar';
import avtUser from '../Components/Assets/Logo/AVT_USER.png';
import {useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [activeMenu, setActiveMenu] = useState('profile');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user-info");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo)); 
    }
  }, []);

  const Logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className='userProfile'>
      <Navbar />
      <div className="row">
        <div className="menu-bar">
          <ul className="nav">
            <li><a href="/profile" className={activeMenu === 'profile' ? 'active' : ''} onClick={() => setActiveMenu('profile')}>Thông tin tài khoản</a></li>
            <li><a href="/historyOrder" className={activeMenu === 'historyOrder' ? 'active' : ''} onClick={() => setActiveMenu('historyOrder')}>Lịch sử mua hàng</a></li>
            <li><a href="/" className={activeMenu === 'historyOrder' ? 'active' : ''} onClick={() => Logout()}>Đăng xuất <i class='bx bx-log-out'></i></a></li>
          </ul>
        </div>
        <div className='userProfile-container'>
          <div className="userProfile-avatar-default">
            <img src={avtUser} alt="avatar" className="avatar-img" />
            <h4 className="user-name">{userInfo.name}</h4>
          </div>
          {userInfo && (
            <div>
              <p>Tên: {userInfo.name}</p>
              <p>Email: {userInfo.email}</p>
              <p>Số điện thoại: {userInfo.phone_number}</p>
              <button><a href="/changepassword">Đổi mật khẩu</a></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;