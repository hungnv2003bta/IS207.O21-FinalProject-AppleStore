import React, { useEffect, useState } from 'react';
import './CSS/historyOrder.css';
import Navbar from '../Components/Navbar/Navbar';
import avtUser from '../Components/Assets/Logo/AVT_USER.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HistoryOrder = () => {
  const [userInfo, setUserInfo] = useState({});
  const [activeStatus, setActiveStatus] = useState(0);
  const [activeMenu, setActiveMenu] = useState('historyOrder');
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const navigate = useNavigate();
  
  const statuses = [
    { status: 'all', label: 'Tất cả' },
    { status: '0', label: 'Chờ xác nhận' },
    { status: '1', label: 'Đã xác nhận' },
    { status: '2', label: 'Đang vận chuyển' },
    { status: '3', label: 'Đã giao hàng' },
    // { status: 'cancelled', label: 'Đã hủy' },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserInfo = localStorage.getItem("user-info");
        if (storedUserInfo) {
          const user = JSON.parse(storedUserInfo);
          setUserInfo(user);

          // Fetch orders
          const ordersResponse = await axios.get(`http://localhost:8000/api/orders/user/${user.id}`);
          const ordersData = ordersResponse.data;

          // Fetch order details
          const orderDetailsPromises = ordersData.map(order =>
            axios.get(`http://localhost:8000/api/orders/${order.id}/details`)
          );

          const orderDetailsResponses = await Promise.all(orderDetailsPromises);
          const orderDetailsData = orderDetailsResponses.flatMap(response => response.data);

          // Fetch product details
          const productDetailsPromises = orderDetailsData.map(detail =>
            axios.get(`http://localhost:8000/api/products/${detail.product_id}`)
          );

          const productDetailsResponses = await Promise.all(productDetailsPromises);
          const productDetailsData = productDetailsResponses.map(response => response.data);

          setOrders(ordersData);
          setOrderDetails(orderDetailsData);
          setProductDetails(productDetailsData);
        }

        
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);
  console.log({
    orders,
    orderDetails,
    productDetails,
  
  });
  const Logout = () => {
    localStorage.clear();
    navigate('/');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  return (
    <div className='userProfile'>
      <Navbar />
      <div className="row">
        <div className="menu-bar">
          <ul className="nav">
            <li><a href="/profile" className={activeMenu === 'profile' ? 'active' : ''} onClick={() => setActiveMenu('profile')}>Thông tin tài khoản</a></li>
            <li><a href="/historyOrder" className={activeMenu === 'historyOrder' ? 'active' : ''} onClick={() => setActiveMenu('historyOrder')}>Lịch sử mua hàng</a></li>
            <li><a href="/" onClick={() => Logout()}>Đăng xuất <i class='bx bx-log-out'></i></a></li>
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
            {orders.length > 0 ? (
              orders.filter(s => s.status === activeStatus).map((order) => (
                <div className="order-item" key={order.id}>
                  <div className="order-item-header">
                    <p>Đơn hàng: {order.id}</p>
                    <p>Ngày đặt: {formatDate(order.order_date)}</p>
                  </div>

                  <div className="order-item-body">
                    {orderDetails && orderDetails?.map((orderDetail) => (
                      orderDetail.order_id === order.id && (
                      <div className="order-item-detail" key={orderDetail.id}>
                        <div className="order-item-info">
                          <p>Tên sản phẩm: {productDetails?.find(s => s.id == orderDetail.product_id)?.color}</p> 
                          <p>Số lượng: {orderDetail.qty}</p>
                          <p>Đơn giá: {orderDetail.price}đ</p>
                        </div>
                      </div>
                      )
                    ))}
                  </div>

                  <div className="order-item-footer">
                    <p>Tổng tiền: {order.total_money}đ</p>
                    <p>Trạng thái: {order.status}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Không có đơn hàng nào để hiển thị.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default HistoryOrder;