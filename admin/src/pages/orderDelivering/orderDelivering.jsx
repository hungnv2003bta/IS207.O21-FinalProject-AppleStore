import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './orderDelivering.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  

  useEffect(() => {
    fetch('http://localhost:8000/api/orders')
      .then(response => response.json())
      .then(data => {
        const unconfirmedOrders = data.filter(order => order.status === 2);
        setOrders(unconfirmedOrders);
      })
      .catch(error => console.error('Failed to load orders:', error));
  }, []);

  const handleEdit = (order) => {
    const updatedOrder = { ...order, status: 3};

    fetch(`http://localhost:8000/api/orders/${order.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedOrder)
    })
    .then(response => response.json())
    .then(() => {
      setOrders(orders.filter(o => o.id !== order.id));
    })
    .catch(error => console.error('Failed to update order:', error));
  };

  const handleViewDetails = async (order) => {
    try {
      const response = await fetch(`http://localhost:8000/api/orders/${order.id}`);
      const data = await response.json();
      if (data) {
        const userResponse = await fetch(`http://localhost:8000/api/users/${data.user_id}`);
        const userData = await userResponse.json();
        setUserDetails(userData);
  
        const detailsResponse = await fetch(`http://localhost:8000/api/orders/${order.id}/details`);
        const detailsData = await detailsResponse.json();
        setOrderDetails(detailsData);
        setEditingOrder(data);
        setShowModal(true);
      } else {
        console.log("No details available for this order.");
      }
    } catch (error) {
      console.error('Failed to fetch order details:', error);
    }
  };
  

  const OrderDetailsModal = ({ order,  onClose, orderDetails }) => {
    const [productList, setProductList] = useState([]);

    const getDetail = async () => {
      try {
        const productPromises = orderDetails.map((orderDetail) =>
          fetch(`http://localhost:8000/api/products/${orderDetail.product_id}`).then((res) => res.json())
        );
        const productListData = await Promise.all(productPromises);
        setProductList(productListData);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }

    useEffect(() => {
      getDetail();
    }, [])
    
    return (
      <div style={{
        display: showModal ? "block" : "none",
        position: "fixed",
        left: "20%", 
        top: "0%",
        bottom : "0%",
        backgroundColor: "#C7E2F2",
        padding: "10px",
        zIndex: 100,
        width: "60%",
        minHeight: "90%",
        overflowY: "auto",
        border: "2px solid black"
      }}>
        <h2>Order Details</h2>
        {order ? (
          <>
          <div className='left-side'>
            <p><strong>ID:</strong> {order.id}</p>
            <p><strong>Name:</strong> {userDetails?.name || 'N/A'}</p>
            <p><strong>Email:</strong> {userDetails?.email || 'N/A'}</p>
            <p><strong>Phone:</strong> {userDetails?.phone_number || 'N/A'}</p>
            <p><strong>Address: </strong> {order.address}</p>
            <p><strong>Total Money: </strong> {order.total_money}</p>
          </div>
          <div className='right-side'>
            <p><strong>List of products: </strong></p>
            <ul className='product-list'>
              {productList?.map((detail, i) => (
                <li key={i} className='product-item'>
                  <p>STT: {i + 1}</p>
                  <p>{detail.name}</p>
                  <p>{detail.price} Đồng</p>
                  <p>Số lượng: {orderDetails[i].qty}</p>
                </li>
              ))}
            </ul>
          </div>

          </>
        ) : (
          <p>No order details available.</p>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    );
  };

  return (
    <div className="orders">
      <Sidebar />
      <div className="orderContainer">
        <h1>QUẢN LÍ ĐƠN ĐANG GIAO</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.user_id}</td>
                <td>{order.order_date}</td>
                <td>{"Đang giao..."}</td>
                <td>${order.total_money}</td>
                <td>
                  <button onClick={() => handleEdit(order)}>Giao hàng thành công</button>
                </td>
                <td>
                  <button onClick={() => handleViewDetails(order)}>Chi tiết</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && orderDetails && <OrderDetailsModal order={editingOrder} orderDetails={orderDetails} onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default Orders;
