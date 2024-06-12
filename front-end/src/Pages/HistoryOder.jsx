import React, { useEffect, useState } from 'react';
import './CSS/UserProfile.css';
import Navbar from '../Components/Navbar/Navbar';
import avtUser from '../Components/Assets/Logo/AVT_USER.png';

const HistoryOrder = () => {
  const [userInfo, setUserInfo] = useState({});
  const [activeStatus, setActiveStatus] = useState('all');
  const [activeMenu, setActiveMenu] = useState('historyOrder');

  const statuses = [
    { status: 'all', label: 'Tất cả' },
    { status: 'pending', label: 'Chờ xác nhận' },
    { status: 'confirmed', label: 'Đã xác nhận' },
    { status: 'shipping', label: 'Đang vận chuyển' },
    { status: 'delivered', label: 'Đã giao hàng' },
    { status: 'cancelled', label: 'Đã hủy' },
  ];

  useEffect(() => {
    // Fetch user info from localStorage
    const storedUserInfo = localStorage.getItem("user-info");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));  // Parse the JSON string back to an object
    }
  }, []);

  return (
    <div className='userProfile'>
    <Navbar />
      <div className="row">
        <div className="menu-bar">
          <ul className="nav">
            <li><a href="/profile" className={activeMenu === 'profile' ? 'active' : ''} onClick={() => setActiveMenu('profile')}>Thông tin tài khoản</a></li>
            <li><a href="/historyOder" className={activeMenu === 'historyOrder' ? 'active' : ''} onClick={() => setActiveMenu('historyOrder')}>Lịch sử mua hàng</a></li>
          </ul>
        </div>
        <div className="historyOrder-container">
          <div className="short-profile">
            <div className="avt-user">
              <img src={avtUser} alt="avatar" className="avatar-img" />
            </div>
            <div className="short-customerInfo">
              <h4 className="user-name">{userInfo.name}</h4>
              <p>{userInfo.phone_number}</p>
              {/* <h4 className="user-name">Thuong</h4> //nháp
              <p>0846099466</p> //nháp */}
            </div>
          </div>
          <div className="order-data">
            <div className="order-qnt">
              <p className="quantity">0</p>
              <p>Đơn hàng</p>
            </div>
            <div className="order-total-money">
              <p className="total-money">0đ</p>
              <p>Tổng tiền</p>
            </div>
          </div>
          <div className="orders-status">
            {statuses.map(({ status, label }) => (
              <div
                key={status}
                className={`box ${activeStatus === status ? 'active' : ''}`}
                data-status={status}
                onClick={() => setActiveStatus(status)}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryOrder;