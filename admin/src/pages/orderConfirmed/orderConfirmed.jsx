import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './orderConfirmed.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/orders')
      .then(response => response.json())
      .then(data => {
        const unconfirmedOrders = data.filter(order => order.status === 1);
        setOrders(unconfirmedOrders);
      })
      .catch(error => console.error('Failed to load orders:', error));
  }, []);

  const handleEdit = (order) => {
    const updatedOrder = { ...order, status: 2 };

    console.warn(updatedOrder);

    fetch(`http://localhost:8000/api/orders/${order.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedOrder)
    })
    .then(response => response.json())
    .then(data => {
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

  const handleViewDetails = (orderId) => {
    console.log("View details for order", orderId);
    // Placeholder for actual detail view implementation
  };

  return (
    <div className="orders">
      <Sidebar />
      <div className="orderContainer">
        <h1>QUẢN LÍ ĐƠN ĐÃ XÁC NHẬN</h1>
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
                <td>{"Đã xác nhận"}</td>
                <td>${order.total_money}</td>
                <td>
                  <button onClick={() => handleEdit(order)}>GIAO HÀNG</button>
                  <button onClick={() => handleDelete(order.id)}>Xoá</button>
                </td>
                <td>
                  <button onClick={() => handleViewDetails(order.id)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
