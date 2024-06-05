import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './orderUnconfirmed.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/orders')
      .then(response => response.json())
      .then(data => {
        const unconfirmedOrders = data.filter(order => order.status === 0);
        setOrders(unconfirmedOrders);
      })
      .catch(error => console.error('Failed to load orders:', error));
  }, []);

  const handleEdit = (order) => {
    const updatedOrder = { ...order, status: 1 };

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

  const handleDelete = (orderId) => {
    fetch(`http://localhost:8000/api/orders/${orderId}`, {
      method: 'DELETE'
    })
    .then(() => setOrders(orders.filter(order => order.id !== orderId)))
    .catch(error => console.error('Failed to delete order:', error));
  };

  const handleViewDetails = (order) => {
    setEditingOrder(order);
    setShowModal(true);
  };

  const OrderDetailsModal = ({ order, onClose }) => {
    return (
      <div style={{
        display: showModal ? "block" : "none",
        position: "fixed",
        left: "30%",
        top: "15%",
        backgroundColor: "#C7E2F2",
        padding: "20px",
        zIndex: 100,
        width: "60%",
        maxHeight: "80%",
        overflowY: "auto",
        border: "2px solid black"
      }}>
        <h2>Order Details</h2>
        {order ? (
          <>
          <div className='left-side'>
            <p><strong>Name: </strong> {order.user_id} </p>
            <p><strong>Email: </strong> </p>
            <p><strong>Address: </strong> </p>
            <p><strong>Total Money: </strong> </p>
          </div>
          <div className='right-side'>
            <p><strong>List of products: </strong> </p>
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
        <h1>QUẢN LÍ ĐƠN CHƯA XÁC NHẬN</h1>
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
                <td>{"Chưa xác nhận"}</td>
                <td>${order.total_money}</td>
                <td>
                  <button onClick={() => handleEdit(order)}>Xác nhận</button>
                  <button id="deleteBtn" onClick={() => handleDelete(order.id)}>Xoá</button>
                </td>
                <td>
                  <button onClick={() => handleViewDetails(order)}>Chi tiết</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && <OrderDetailsModal order={editingOrder} onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default Orders;
