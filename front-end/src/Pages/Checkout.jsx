import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/Checkout.css';
import Navbar from '../Components/Navbar/Navbar'

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user-info"));
        const user_id= user.id; 
        const response = await axios.get(`http://localhost:8000/api/cart/items/${user_id}`);

        if (response.data && response.data.cartItems) {
          setCartItems(response.data.cartItems);
        } else {
          console.error('Invalid response structure:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const getProductDetails = async () => {
    try {
      const productDetailsPromises = cartItems.map(item => {
        return axios.get(`http://localhost:8000/api/products/${item.product_id}`);
      });

      const productDetailsResponses = await Promise.all(productDetailsPromises);
      const productDetails = productDetailsResponses.map(response => response.data);
      setProductDetails(productDetails);
    } catch (error) {
      console.error('Failed to fetch product details:', error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [cartItems])

  useEffect(() => {
    const sum = cartItems.reduce((total, item) => total + parseInt(item.total_money), 0);
    setTotalSum(sum);
  }, [cartItems, productDetails]);

  

  return (
    <div className="container">
      <Navbar />
      <div className="heading-checkout">
        <i className="fa fa-credit-card fa-4x" aria-hidden="true"></i>
        <h2>Thanh toán</h2>
        <p className="lead">Vui lòng kiểm tra thông tin khách hàng, thông tin giỏ hàng trước khi đặt hàng.</p>
      </div>
      <div className="payment-content">
        <div className="customer-info">
          <h4>Thông tin khách hàng</h4>
          <div className="list-input-info">
            <div className="input">
              <label>Họ tên</label>
              <input type="text" name="kh_ten" id="kh_ten" placeholder="Nguyen Van A" />
            </div>
            <div className="input">
              <label>Địa chỉ</label>
              <input type="text" name="kh_diachi" id="kh_diachi" placeholder="Thu Duc" />
            </div>
            <div className="input">
              <label>Điện thoại</label>
              <input type="text" name="kh_dienthoai" id="kh_dienthoai" placeholder="0915659223" />
            </div>
            <div className="input">
              <label>Email</label>
              <input type="text" name="kh_email" id="kh_email" placeholder="nguyenag@gmail.com" />
            </div>
            <div className="input">
              <label>Ghi chú</label>
              <input type="text" name="kh_note" id="kh_note" placeholder="Ghi chú..." />
            </div>
          </div>

          <h4>Hình thức thanh toán</h4>
          <h5> Hiện tại chỉ hỗ trợ thanh toán khi nhận hàng</h5>
          <hr />
          <button className="order-button" type="submit" name="order-button">Đặt hàng</button>
        </div>

        <div className="order-products">
          <h4 className="heading-order-products">
              Giỏ hàng
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{productDetails[index]?.name}</td>
                  <td>{productDetails[index]?.price} VND</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2"><strong>Tổng thành tiền</strong></td>
                <td><strong>{totalSum} VND</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Checkout;
