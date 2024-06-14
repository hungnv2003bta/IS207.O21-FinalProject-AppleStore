import React, { useEffect, useState } from 'react';
import './CSS/historyOrder.css';
import Navbar from '../Components/Navbar/Navbar';
import avtUser from '../Components/Assets/Logo/AVT_USER.png';
import {useNavigate } from 'react-router-dom';

const HistoryOrder = () => {
  const [userInfo, setUserInfo] = useState({});
  const [activeStatus, setActiveStatus] = useState('all');
  const [activeMenu, setActiveMenu] = useState('historyOrder');
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const statuses = [
    { status: 'all', label: 'Tất cả' },
    { status: 'pending', label: 'Chờ xác nhận' },
    { status: 'confirmed', label: 'Đã xác nhận' },
    { status: 'shipping', label: 'Đang vận chuyển' },
    { status: 'delivered', label: 'Đã giao hàng' },
    { status: 'cancelled', label: 'Đã hủy' },
  ];


  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user-info");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo)); 
    }

    const mockOrders = [
      { id: 1, status: 'pending', items: ['Item A', 'Item B'], total: '100000đ' },
      { id: 2, status: 'confirmed', items: ['Item C'], total: '50000đ' },
      { id: 3, status: 'shipping', items: ['Item D', 'Item E'], total: '150000đ' },
      { id: 4, status: 'delivered', items: ['Item F'], total: '80000đ' },
      { id: 5, status: 'cancelled', items: ['Item G'], total: '0đ' },
    ];

    setOrders(mockOrders);

  }, []);

  const Logout = () => {
    localStorage.clear();
    navigate('/');
  };

  const filteredOrders = activeStatus === 'all'
    ? orders
    : orders.filter(order => order.status === activeStatus);


  return (
    <div className='userProfile'>
    <Navbar />
      <div className="row">
        <div className="menu-bar">
          <ul className="nav">
            <li><a href="/profile" className={activeMenu === 'profile' ? 'active' : ''} onClick={() => setActiveMenu('profile')}>Thông tin tài khoản</a></li>
            <li><a href="/historyOrder" className={activeMenu === 'historyOrder' ? 'active' : ''} onClick={() => setActiveMenu('historyOrder')}>Lịch sử mua hàng</a></li>
            <li><a href="/"  onClick={() => Logout()}>Đăng xuất <i class='bx bx-log-out'></i></a></li>
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

          <div className="order-details">
            {filteredOrders.length > 0 ? (
              filteredOrders.map(order => (
                <div key={order.id} className="order-item">
                  <h5>Order #{order.id}</h5>
                  <p>Status: {statuses.find(s => s.status === order.status).label}</p>
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p>Total: {order.total}</p>
                </div>
              ))
            ) : (
              <p>No orders found for this status.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryOrder;